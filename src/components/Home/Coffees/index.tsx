import { CoffeTypeItemStyle, CoffeTypesStyle, CoffeeContainer, CoffeeStyles, InteractionStyle } from "./styles"
import { AmountCoffee } from '../../AmountCoffee'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { useContext } from "react"
import { CoffeesContext } from "../../../context/CoffeesContext"

export function Coffees(){
    const { coffeesList, AddCoffeeCart } = useContext(CoffeesContext)

    return(
        <CoffeeContainer>
        {coffeesList.map(coffe =>{
            return(
                <CoffeeStyles>
                    <img src={coffe.imgUrl}/>
                    <CoffeTypesStyle>
                    {coffe.types.map(type =>{
                        return(
                            <CoffeTypeItemStyle>{type}</CoffeTypeItemStyle>
                        )
                    })}
                    </CoffeTypesStyle>
                    <h3>{coffe.name}</h3>
                    <p>{coffe.desc}</p>
                    <InteractionStyle>
                        <p><span>R$ </span>{coffe.price}</p>
                        <AmountCoffee id={coffe.id} amount={coffe.amount}/>
                        <button onClick={() => AddCoffeeCart(coffe)}><ShoppingCartSimple weight="fill" size={22} /></button>
                    </InteractionStyle>
                </CoffeeStyles>
            )
        })}
        </CoffeeContainer>
    )
}