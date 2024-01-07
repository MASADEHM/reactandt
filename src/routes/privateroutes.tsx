import { Navigate, Outlet } from "react-router-dom";

 export const PrivateRoutes = () => {
    const isLoggedIn: boolean = true;
    return (isLoggedIn ? <Outlet /> : <Navigate to={'/login'} replace />)
}