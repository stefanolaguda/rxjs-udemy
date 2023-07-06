import { forkJoin, map } from "rxjs";
import { ajax } from "rxjs/ajax";

const randomPcUrl = ajax<any>("https://random-data-api.com/api/computer/random_computer").pipe(
    map((data) => data.response.stack)
);
const randomFoodUrl = ajax<any>("https://random-data-api.com/api/food/random_food").pipe(
    map(data => data.response.dish)
);
const randomCoffeeUrl = ajax<any>("https://random-data-api.com/api/dessert/random_dessert").pipe(
    map(data => data.response.flavor)
);

forkJoin([randomPcUrl, randomCoffeeUrl, randomFoodUrl]).subscribe({
    next: ([randomPc, randomCoffee, randomFood]) => { 
        console.log(`stack del pc: ${randomPc}\ncaffè: ${randomCoffee}\ncibo: ${randomFood}`); 
    },
    error: (error) => console.log(error)
});