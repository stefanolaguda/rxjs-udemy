import { Observable, fromEvent } from "rxjs";

const triggerBtn = document.querySelector("#trigger");
const trigger2Btn = document.querySelector("#trigger2");
const trigger3Btn = document.querySelector("#trigger3");

console.log(triggerBtn);

let subscriptionTrigger = fromEvent<MouseEvent>(triggerBtn, "click").subscribe({
    next: (data) => {
        console.log(data);
        console.log(data.type);
    },
});

const trigger2Click$ = new Observable((subscriber) => {
    trigger2Btn.addEventListener("click", (event) => {
        subscriber.next(event);
    });
});

trigger2Click$.subscribe({
    next: (data) => console.log(data),
    error: (error) => console.log(error),
});

setTimeout(() => {
    console.log("Unsubscribe");
    subscriptionTrigger.unsubscribe();
}, 5000);

const trigger3Clic$ = new Observable<MouseEvent>((subscriber) => {
    const clickHandlerFn = (event: MouseEvent) => {
        subscriber.next(event);
    };

    trigger3Btn.addEventListener("click", clickHandlerFn);

    return () => {
        trigger3Btn.removeEventListener("click", clickHandlerFn);
    };
});
