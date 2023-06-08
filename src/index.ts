import { Observable } from "rxjs";

const Observable$ = new Observable<string>((subscriber) => {
    subscriber.next("Stefano");
    setTimeout(() => subscriber.next("Laguda"), 2000);
    setTimeout(() => subscriber.next("Steppy"), 4000);
});

console.log("Subscription 1");
Observable$.subscribe((result) => console.log(result));

console.log("Subscription 2");
setTimeout(() => Observable$.subscribe((result) => console.log(result)), 1000);

// const testUnsuscribe = Observable$.subscribe((result) => console.log(result));

// setTimeout(() => testUnsuscribe.unsubscribe(),4000);
