import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Category from "../../Pages/Category/Category/Category";
import News from "../../Pages/News/News/News";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivetRoute from "../PrivetRout/PrivetRoute";
import TremsAndCondition from "../../Pages/Others/TremsAndCondition/TremsAndCondition";
import Profile from "../../Pages/Others/Profile/Profile";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivetRoute><News></News></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/condition',
                element: <TremsAndCondition></TremsAndCondition>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])