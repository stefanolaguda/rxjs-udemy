import { Observable, Subscriber } from "rxjs";

let count: number = 0;
const Observable$ = new Observable<number>((subscriber) => {
    const intervalId$ = setInterval(() => subscriber.next((count += 2)), 2000);

    return () => {
        clearInterval(intervalId$);
    };
});

let subscriptionObs = Observable$.subscribe({
    next: (data) => console.log(data),
    error: (err) => console.log(err),
    complete: () => console.log("Observable completed"),
});

setTimeout(() => subscriptionObs.unsubscribe(), 7000);
