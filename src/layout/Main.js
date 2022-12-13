import { Outlet } from "react-router-dom"
import {Footer} from "../components/Footer/Footer"
import { Nav } from "../components/Nav/Nav"
export function Main(){
    return<>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer/>
    </>
}