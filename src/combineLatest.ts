import { combineLatest, fromEvent } from "rxjs";

const temperatureInput = document.querySelector("#temperature-input");
const conversionDropdown = document.querySelector("#conversion-dropdown");
const resultText = document.querySelector("#result-text");

const temperatureInputEvent$ = fromEvent<any>(temperatureInput, "input");
const conversionInputEvent$ = fromEvent<any>(conversionDropdown, "input");

combineLatest([temperatureInputEvent$, conversionInputEvent$]).subscribe({
    next: ([temperatureEvent, conversionEvent]) => {
        console.log(typeof temperatureEvent);

        console.log(temperatureEvent.target["value"]);
        console.log(conversionEvent.target["value"]);

        const temperature = Number(temperatureEvent.target["value"]);
        const conversion = conversionEvent.target["value"];

        let result: number;
        if (conversion === "f-to-c") {
            result = ((temperature - 32) * 5) / 9;
        } else if (conversion === "c-to-f") {
            result = (temperature * 9) / 5 + 32;
        }

        resultText.innerHTML = String(result);
    },
    error: (error) => console.log(error),
});
