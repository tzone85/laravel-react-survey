import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./views/Dashboard.jsx";
import Surveys from "./views/Surveys.jsx";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/surveys',
        element: <Surveys />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: 'signup',
        element: <Signup />
    },
])

export default router;
