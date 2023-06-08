import { Observable } from "rxjs";

const Observable$ = new Observable<string>((subscriber) => {
    console.log("Observable executed");
    subscriber.next("ciao");
});

console.log("Before subscribe");
Observable$.subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log(err),
});
console.log("After subscribe");
