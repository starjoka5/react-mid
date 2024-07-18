import { ICountry } from "../interface/app";
import { wrappedPromise } from "./wrapper";

export const getRandomWord = async () => {
    try {
        const response = await fetch(`https://random-word-api.herokuapp.com/word`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const randomWord = await response.json();
        return randomWord;
    } catch (err) { /* empty */ }
}
export const getCountryList = () => {
    const promise = new Promise<ICountry[]>((resolve, reject) => {
        fetch(`https://restcountries.com/v3.1/all?fields=name,flags`)
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    resolve(data);
                }, 1000); // Delay of 2 seconds
            })
            .catch(error => reject(error));
    });

    return wrappedPromise<ICountry[]>(promise);
}
export function generateProducts() {
    const products = [];
    for (let i = 0; i < 10000; i++) {
      products.push(`Product ${i+1}`);
    }
    return products;
  }