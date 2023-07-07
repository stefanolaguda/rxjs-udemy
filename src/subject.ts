import { Subject, fromEvent, map } from "rxjs";

const inputSubject: HTMLInputElement = document.querySelector("input#value-input");
const buttonOfInput = document.querySelector("button#emit");
const buttonSubscribeSubject = document.querySelector("button#subscribe");

const subject$ = new Subject<string>();

fromEvent(buttonOfInput, "click")
    .pipe(
        map(() => inputSubject.value)
    )
    .subscribe({
        next: (inputValue) => {
            // console.log(inputValue);
            subject$.next(inputValue);
            console.log("subject", subject$);
        } 
    });

fromEvent(buttonSubscribeSubject, "click").subscribe({
    next: () => {
        console.log("New Subscription");
        subject$.subscribe(value => console.log(value));
        console.log("subject", subject$);
    }
})