import { EMPTY, catchError, concatMap, fromEvent, map, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const inputFetch: HTMLInputElement = document.querySelector("input#endpoint");
const buttonFetch = document.querySelector("button#fetch");

fromEvent(buttonFetch, "click")
.pipe(
    map( () => inputFetch.value),
    concatMap((value) =>
        callAjaxHttp(value).pipe(
            catchError((error) => of(`Could not fetch data: ${error}`))
        )
    )
)
.subscribe({
    next: (value) => console.log(value),
    error: (error) => console.log(error),
    complete: () => console.log("Completed")
})

function callAjaxHttp(value: string ) {
    return ajax(`https://random-data-api.com/api/${value}/random_${value}`)
}