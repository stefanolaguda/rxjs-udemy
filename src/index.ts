import { Observable } from "rxjs";

const testObservable = new Observable((subscriber) => {
    subscriber.next("Riccardo");
    subscriber.next("Panelli");
});

const observer = {
    next: (data: any) => console.log(data),
};

testObservable.subscribe(observer); // Subscription
