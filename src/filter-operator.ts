// FILTER()

import { Observable, filter } from "rxjs"

interface NewsItem {
    category: "sports" | "report",
    content: string
};

const observableNews$ = new Observable<NewsItem>((subscriber) => {
    setTimeout(() => subscriber.next({ category: "sports", content: "A" }), 2000);

    setTimeout(() => subscriber.next({ category: "report", content: "B" }), 4000);

    setTimeout(() => subscriber.next({ category: "sports", content: "C" }), 6000);

    setTimeout(() => subscriber.next({ category: "report", content: "D" }), 8000);
});

// observableNews$.subscribe({
//     next: (data) => console.log(data),
//     error: (error) => console.log(error)
// });

observableNews$.pipe(
    filter((value) => value.category === "sports")
).subscribe({
    next: (data) => console.log(data),
    error: (error) => console.log(error)
})