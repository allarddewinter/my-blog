---
title: "Functional Core, Imperative Shell: Separating Logic from Side Effects"
description: "Explore the 'Functional Core, Imperative Shell' pattern for building more testable and maintainable software by isolating pure logic from external interactions."
date: 2025-10-28
tags: [technology, software-architecture, functional-programming, testing]
---

From: [Simplify Your Code: Functional Core, Imperative Shell](https://testing.googleblog.com/2025/10/simplify-your-code-functional-core.html?m=1)

The "Functional Core, Imperative Shell" (FCIS) pattern advocates for a clear separation between an application's pure business logic and its interactions with the outside world. This architectural approach aims to enhance testability, maintainability, and adaptability by confining side effects to a thin, imperative layer.

> "Mixing database calls, network requests, and other external interactions directly with your core logic can lead to code that’s difficult to test, reuse, and understand. Instead, consider writing a functional core that’s called from an imperative shell."

### Understanding the Components

*   **Functional Core:** This part contains pure, testable business logic. It operates solely on the data it is given, producing predictable outputs without causing any side effects (such as I/O operations or external state mutations). Its purity makes it inherently easier to reason about and unit test in isolation.
*   **Imperative Shell:** This layer is responsible for handling all side effects. It orchestrates interactions with external systems like databases, APIs, or user interfaces. The shell uses functions from the functional core to perform business logic, acting as the bridge between the pure logic and the impure reality of external dependencies.

### Why Adopt FCIS?

*   **Enhanced Testability:** The functional core can be tested exhaustively with unit tests, as its behaviour is deterministic and free from external dependencies. This significantly reduces the need for complex integration tests for core logic.
*   **Improved Maintainability:** By isolating side effects, changes to external systems (e.g., swapping a database or email service) primarily affect the imperative shell, leaving the stable functional core untouched.
*   **Increased Reusability:** Pure functions within the core are highly reusable across different contexts or imperative shells, as they have no hidden dependencies.
*   **Clearer Separation of Concerns:** This pattern enforces a disciplined approach to software design, making it easier to understand which parts of the codebase are responsible for what.

### Example: Sending Expiration Notifications

Consider a function to send expiration notification emails. A common "messy" approach might interleave database calls and email sending directly within the logic:

```python
# Bad: Logic and side effects are mixed
import datetime

class User:
    def __init__(self, name, email, subscription_end_date, is_free_trial):
        self.name = name
        self.email = email
        self.subscription_end_date = subscription_end_date
        self.is_free_trial = is_free_trial

class Database:
    def get_users(self):
        # Simulates fetching all users from a database
        return [
            User("Alice", "alice@example.com", datetime.date(2025, 1, 15), False),
            User("Bob", "bob@example.com", datetime.date(2025, 11, 1), True),
            User("Charlie", "charlie@example.com", datetime.date(2025, 10, 20), False),
        ]

class EmailService:
    def send(self, recipient, subject):
        print(f"Sending email to {recipient}: {subject}")

def send_user_expiry_email_bad():
    db = Database()
    email_service = EmailService()
    today = datetime.date.today()

    for user in db.get_users():
        if user.subscription_end_date > today:
            continue
        if user.is_free_trial:
            continue
        email_service.send(user.email, f"Your account has expired {user.name}.")

# Example usage (not run in actual blog post)
# send_user_expiry_email_bad()
```

Rewriting this using the FCIS pattern separates the pure logic from the side effects:

**Functional Core (Python):**

```python
# Functional Core: Pure business logic
import datetime

class User: # Re-using the User class definition from above
    def __init__(self, name, email, subscription_end_date, is_free_trial):
        self.name = name
        self.email = email
        self.subscription_end_date = subscription_end_date
        self.is_free_trial = is_free_trial

def get_expired_users(users: list[User], cutoff_date: datetime.date) -> list[User]:
    """Filters a list of users to find those with expired, non-free trial subscriptions."""
    return [
        user for user in users
        if user.subscription_end_date <= cutoff_date and not user.is_free_trial
    ]

def generate_expiry_emails(users: list[User]) -> list[tuple[str, str]]:
    """Generates email details (recipient, subject) for a list of users."""
    return [
        (user.email, f"Your account has expired {user.name}.")
        for user in users
    ]
```

**Imperative Shell (Python):**

```python
# Imperative Shell: Handles side effects and orchestrates the functional core
class Database: # Re-using the Database class definition from above
    def get_users(self):
        # Simulates fetching all users from a database
        return [
            User("Alice", "alice@example.com", datetime.date(2025, 1, 15), False),
            User("Bob", "bob@example.com", datetime.date(2025, 11, 1), True),
            User("Charlie", "charlie@example.com", datetime.date(2025, 10, 20), False),
        ]

class EmailService: # Re-using the EmailService class definition from above
    def send_bulk(self, emails: list[tuple[str, str]]):
        for recipient, subject in emails:
            print(f"Sending email to {recipient}: {subject}")

def send_expiry_notifications_fcis():
    db = Database()
    email_service = EmailService()
    today = datetime.date.today()

    all_users = db.get_users() # Side effect: database read
    expired_users = get_expired_users(all_users, today) # Pure function call
    emails_to_send = generate_expiry_emails(expired_users) # Pure function call
    email_service.send_bulk(emails_to_send) # Side effect: sending emails

# Example usage (not run in actual blog post)
# send_expiry_notifications_fcis()
```

This refactoring makes the core logic (`get_expired_users`, `generate_expiry_emails`) pure and easily testable. The imperative shell then handles the actual database retrieval (`db.get_users()`) and email dispatch (`email_service.send_bulk()`).

### Reflections and Nuances

From: https://news.ycombinator.com/item?id=45701901

The FCIS pattern, while powerful, invites discussion on its practical application and relationship with other architectural principles.

#### FCIS vs. "Generic Core, Specific Shell" (GCSS)

A related concept, "Generic Core, Specific Shell," suggests building a generic core that can address a family of related problems, adapted by a specific shell for particular needs. While seemingly opposed, these two ideas can be seen as orthogonal or even complementary[^1].

*   **FCIS** focuses on *verification* ("Does it do what it's supposed to do?") by isolating side effects for easier testing.
*   **GCSS** focuses on *validation* ("Is what it's supposed to do what we actually need it to do?") by promoting adaptability and reusability across similar problems.

Ideally, GCSS can be applied recursively, with specific shells adapting slightly more generic cores. FCIS, on the other hand, is more about the boundary between pure logic and impure effects within a component.

#### Practical Considerations and Criticisms

*   **Database Interaction:** A common critique of the example is the `db.get_users()` call within the imperative shell, which implies fetching *all* users into memory before filtering. In real-world scenarios, the imperative shell would typically interact with the database to perform filtered queries directly (e.g., `db.get_expired_users(datetime.date.today())`) to avoid performance issues[^2]. The example serves to illustrate the separation of concerns rather than an optimal database interaction strategy.
*   **Readability of Chained Calls:** The one-liner `email.bulkSend(generateExpiryEmails(getExpiredUsers(db.getUsers(), Date.now())));` can be difficult to read and debug. Many developers prefer breaking this into multiple lines with intermediate variables for clarity, or using pipe operators available in some languages[^3].
*   **Over-engineering vs. Adaptability:** While GCSS promotes adaptability, it also carries the risk of over-engineering if not applied judiciously, potentially violating KISS (Keep It Simple, Stupid) and YAGNI (You Ain't Gonna Need It) principles. The balance lies in understanding the context and anticipated evolution of the system.
*   **The "Good Code" Debate:** The discussion around FCIS often touches upon the subjective nature of "good code." Different paradigms (e.g., Object-Oriented Programming, Domain-Driven Design) offer distinct approaches, and what constitutes "good" can depend on the project, team, and specific challenges. FCIS offers a valuable lens for achieving certain qualities like testability and maintainability, but it is not the sole arbiter of code quality.
*   **Time-Dependent Logic:** The use of `Date.now()` (or `datetime.date.today()` in Python) in the example highlights a common challenge: how to handle time-dependent logic in a testable way. Injecting a "clock" dependency (e.g., `clock.now()`) rather than relying on global time functions is crucial for deterministic testing.

Ultimately, FCIS provides a robust framework for structuring code, particularly in languages that support functional programming constructs. It encourages a mindset where core logic is pristine and predictable, while external interactions are managed explicitly at the boundaries. This distinction is crucial for building software that is both robust and easy to evolve.

[^1]: As one commenter noted, "I disagree that these two pieces of advice are opposed. I think they are orthogonal at worst, and in agreement at best."
[^2]: The author of the original article acknowledged this, stating, "I do regret using 'db' a bit now after reading all of the comments here, as it's taken away focus from the main point."
[^3]: Languages like Elixir, with its pipe operator (`|>`), can make such chained calls significantly more readable.