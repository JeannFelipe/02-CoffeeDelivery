import { Link } from 'react-router-dom'
import { ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeesContext'

import { CartStyle } from './styles'

export function Cart(){
    const { coffeesCart } = useContext(CoffeesContext)

    if(coffeesCart.length == 0){
        return(
            <CartStyle>
                <Link to="/checkout">
                <ShoppingCart weight="fill" size={22}/>
                </Link>
            </CartStyle>
        )
    }
    return(
        <CartStyle>
            <Link to="/checkout">
            <ShoppingCart weight="fill" size={22}/>
            </Link>
            <span>{coffeesCart.length}</span>
        </CartStyle>
    )
}