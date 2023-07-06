import { debounceTime, fromEvent, map } from "rxjs";

const rangeInput = document.querySelector("input#slider");

fromEvent<any>(rangeInput, "input")
.pipe(
    map( (data) => data.target["value"]),
    debounceTime(1000)
)
.subscribe({
    next: (inputValue) => console.log(inputValue)
})