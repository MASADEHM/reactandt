import { RouteObject } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import { PrivateRoutes } from "./privateroutes";
import Users from "../pages/users";
import { createBrowserRouter } from 'react-router-dom'
import Login from "../pages/login";
import TableTest from "../pages/test";
import Quotes from "../pages/quotes";
const routes: RouteObject[] = [{
    path: '/',
    element: <App />,
    children: [{
        path: '/',
        element: <Home />
    },
    { path: '/login', element: <Login /> },
    {
        path: '/',
        element: <PrivateRoutes />,
        children: [{
            path: '/users',
            element: <Users />
        },{
            path: '/quotes',
            element: <Quotes/>
        },{
            path: '/test',
            element: <TableTest />
        }]
    }
    ]
}]
const router = createBrowserRouter(routes);
export default router;