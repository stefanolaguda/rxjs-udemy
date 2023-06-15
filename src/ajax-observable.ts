import { ajax } from "rxjs/ajax";

let ajaxUrl = ajax<any>("https://random-data-api.com/api/v2/users");

ajaxUrl.subscribe({
    next: (data) => console.log("Sub 1", data.response),
    error: (err) => console.log(err),
    complete: () => console.log("Complete Observable"),
});

ajaxUrl.subscribe({
    next: (data) => console.log("Sub 2", data.response),
    error: (err) => console.log(err),
    complete: () => console.log("Complete Observable 2"),
});
