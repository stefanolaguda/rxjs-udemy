import { Observable } from "rxjs";

let btn = document.querySelector("#btn");

let btnMouseEvent = new Observable<MouseEvent>((subscriber) => {
    btn.addEventListener("click", (event: MouseEvent) => {
        subscriber.next(event);
    });
});

btnMouseEvent.subscribe({
    next: (data) => console.log(data.x),
    error: (err) => console.log(err),
});
