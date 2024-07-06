import { axiosInstance } from "../core/interceptor"
import { IQuote } from "../interfaces/quote.interface";

const url = 'https://dummyjson.com/quotes'
export const quoteService = {
    getAll: () => {
        return axiosInstance.get<IQuote>(url).then(d => d).catch(err => {
            console.log(err.message)
        });
    }
}