import { axiosInstance } from "../core/interceptor"
import { IUsers } from "../interfaces/user.interface";


const url='https://dummyjson.com/users';
export const userService={
    getAll:()=>{
        return axiosInstance.get<IUsers>(url).then(d=>d);
    }
}