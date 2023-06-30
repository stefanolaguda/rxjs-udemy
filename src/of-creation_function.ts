import { Observable, observable, of } from "rxjs";

of("Stefano", "Cristian", "Benedeta").subscribe({
    next: (response) => console.log(response),
    error: (error) => console.log(error),
    complete: () => console.log("completed"),
});

let observable$ = new Observable((subscriber) => {
    subscriber.next("Stefano");
    subscriber.next("Cristian");
    subscriber.next("Benedetta");
    subscriber.complete();
});

observable$.subscribe({
    next: (response) => console.log(response),
    error: (error) => console.log(error),
    complete: () => console.log("Completed"),
});

// Creation Function
function createObservable(...args: string[]): Observable<string> {
    return new Observable<string>((subscriber) => {
        for (let i = 0; i < args.length; i++) {
            subscriber.next(args[i]);
        }
        subscriber.complete();
    });
}

createObservable("Giulio", "Andrea", "Chiara").subscribe({
    next: (response) => console.log(response),
    error: (error) => console.log(error),
    complete: () => console.log("Completato dalla funzione"),
});
