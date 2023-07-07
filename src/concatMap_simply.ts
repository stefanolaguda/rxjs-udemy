import { Observable, concatMap, of } from "rxjs";

const observable$ = new Observable( (subscriber) => {
    setTimeout( () => subscriber.next("A"), 2000);
    setTimeout( () => subscriber.next("B"), 4000);
});

observable$
.pipe(
    concatMap(() => of(1, 2))
)
.subscribe({
    next: (data) => console.log(data),
    error: (error) => console.log(error)
})