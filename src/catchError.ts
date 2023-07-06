import { EMPTY, Observable, catchError, of } from "rxjs";

const failingHttpRequest$ = new Observable((subscriber) => {
    setTimeout(() => subscriber.error(new Error("Timeout")), 2000);
});


failingHttpRequest$.pipe(
    // catchError((error) => of("catchError error"))
    catchError( (error) => EMPTY)
)
.subscribe({
    next: (data) => console.log(data)
})