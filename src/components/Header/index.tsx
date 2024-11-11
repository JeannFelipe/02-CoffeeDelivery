import { HeaderLayout } from "./styles"
import { Link } from "react-router-dom"

import coffeLogo from '../../assets/coffee-logo.svg'

import { Cart } from "../Cart"
import { Region } from "../Region"

export function Header(){
    return(
        <HeaderLayout>
            <Link to="/">
            <img src={ coffeLogo }/>
            </Link>
            <nav>
                <Region />
                <Cart />
            </nav>
        </HeaderLayout>
    )
}