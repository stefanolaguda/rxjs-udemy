import { interval, timer } from "rxjs";

timer(2000).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("Completed"),
});

const intervalObs$ = interval(3000).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("completed"),
});

setTimeout(() => {
    console.log("Unsuscribe");
    intervalObs$.unsubscribe();
}, 10000);
