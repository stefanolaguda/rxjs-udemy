import { Observable } from "rxjs";

const Observable$ = new Observable<string>((subscriber) => {
    console.log("Observable executed");
    subscriber.next("ciao");
    subscriber.next("Stefano");
    subscriber.error(new Error("Failure observable"));
    setTimeout(() => {
        subscriber.next("Laguda");
    }, 2000);

    // TEARDOWN
    return () => {
        console.log("Teardown");
    };
});

console.log("Before subscribe");

Observable$.subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log(err),
    complete: () => console.log("Observable Completed"),
});

console.log("After subscribe");
