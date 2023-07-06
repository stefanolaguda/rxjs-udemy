import { filter, map, of, tap } from "rxjs";


of(3, 4, 1, 9, 6).pipe(
    map( item => item * 2),
    tap({
        next: (data) => console.log("spy: ", data)
    }),
    filter( item => item > 10)
).subscribe({
    next: (data) => console.log(data),
    error: (error) => console.log(error)
})