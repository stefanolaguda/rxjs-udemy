import { Observable } from "rxjs";

const Observable$ = new Observable<string>((subscriber) => {
    subscriber.next("Stefano");
    setTimeout(() => subscriber.next("Laguda"), 3000);
    setTimeout(() => subscriber.next("Steppy"), 5000);
});

const testUnsuscribe = Observable$.subscribe((result) => console.log(result));

setTimeout(() => testUnsuscribe.unsubscribe(),4000);
