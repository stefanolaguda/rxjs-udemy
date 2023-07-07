import { BehaviorSubject, from, fromEvent, withLatestFrom } from "rxjs";

const loggedInSpan: HTMLElement = document.querySelector("span#logged-in");
const loginButton: HTMLElement = document.querySelector("button#login");
const logoutButton: HTMLElement = document.querySelector("button#logout");
const printStateButton: HTMLElement = document.querySelector("button#print-state");

const isLoggedIn$ = new BehaviorSubject<boolean>(false);

fromEvent(loginButton, "click").subscribe({
    next: () => isLoggedIn$.next(true),
    error: (error) => console.log(error)
});

fromEvent(logoutButton, "click").subscribe({
    next: () => isLoggedIn$.next(false),
    error: (error) => console.log(error)
});

// Navbar 
isLoggedIn$.subscribe({
    next: () => loggedInSpan.innerHTML = " " + isLoggedIn$.value.toString()
});

// Buttons login and logout
isLoggedIn$.subscribe({
    next: () => {
        loginButton.style.display = isLoggedIn$.value ? "none" : "block";
        logoutButton.style.display = isLoggedIn$.value ? "block" : "none";
    }
});

// Print State Button
fromEvent(printStateButton, "click")
    .pipe(
        withLatestFrom(isLoggedIn$)
    )
    .subscribe({
        next: ([event, isLoggedIn]) => console.log("User is logged in: ", isLoggedIn),
        error: (error) => console.log(error)
    })