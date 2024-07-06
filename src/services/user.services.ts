import { axiosInstance } from "../core/interceptor"
import { IUsers } from "../interfaces/user.interface";


const url = 'https://dummyjson.com/users';
export const userService = {
    getAll: async () => {
        return (await axiosInstance.get<IUsers>(url, {
            headers: {
                "Content-Type": "application/josn"
            }
        }).then(d => d))
    }

}