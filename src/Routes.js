import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import {Home} from "./components/Home/Home";
import { Main } from "./layout/Main";
import ErrorPage from "./components/ErrorPage";
import Topics from "./components/Topics/Topics";
import Topic from "./components/Topic/Topic";
import Quiz from "./components/Quiz/Quiz";
import Blog from "./components/Blog/Blog";
export const  router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>, 
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }, 
            {
                path:'home', 
                element:<Home/>
            },
            {
                path:'topics',
                loader:()=>{
                    return fetch(`https://openapi.programming-hero.com/api/quiz`)
                },
                element:<Topics/>
            }, 
          {
            path:'/topic/:id',
            loader:({params})=>{
                console.log(params);
                return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
            },
            element:<Quiz/>,
          }, 
          {
            path:'/blog',
            element:<Blog/>
          }
        ]
    }, 
])