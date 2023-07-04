import { forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";

let randomCoffeeAjax = ajax<any>(
    "https://random-data-api.com/api/coffee/random_coffee"
);

let randomDessertAjax = ajax<any>(
    "https://random-data-api.com/api/dessert/random_dessert"
);

let randomFoodAjax = ajax<any>(
    "https://random-data-api.com/api/food/random_food"
);

forkJoin([randomFoodAjax, randomDessertAjax, randomCoffeeAjax]).subscribe({
    next: ([randomFood, randomDessert, randomCoffee]) => {
        console.log(randomFood);
        console.log(randomDessert);
        console.log(randomCoffee);

        console.log(
            `cibo: ${randomFood.response.dish},\ndessert: ${randomDessert.response.variety},\ncaffè: ${randomCoffee.response.blend_name}`
        );
    },
    error: (error) => console.log(error),
    complete: () => console.log("completed"),
});
