import { Minus, Plus } from "@phosphor-icons/react";
import { AmountCoffeeStyles } from "./styles";
import { useContext } from "react";
import { CoffeesContext } from "../../context/CoffeesContext";

interface AmountCoffeeProps{
    id: number
    amount: number
    cart?: boolean
}

export function AmountCoffee( { id, amount, cart = false } : AmountCoffeeProps){
    const { coffeesList, setCoffeesList, coffeesCart, setCoffeesCart } = useContext(CoffeesContext)

    function Lower(){
        const coffee = coffeesList.find(coffee =>{
            if(coffee.id === id){
                return coffee
            }
        });
        if(coffee && coffee.amount > 1){
            const newCoffeesList = coffeesList.map(coffee => {
                return coffee.id === id ? {...coffee, amount: coffee.amount - 1} : coffee
            })
            setCoffeesList(newCoffeesList)
        }
    }

    function Increase(){
        const coffee = coffeesList.find(coffee =>{
            if(coffee.id === id){
                return coffee
            }
        });
        if(coffee && coffee.amount < 10){
            const newCoffeesList = coffeesList.map(coffee => {
                return coffee.id === id ? {...coffee, amount: coffee.amount + 1} : coffee
            })
            setCoffeesList(newCoffeesList)
        }
    }

    function LowerCart(){
        const coffee = coffeesCart.find(coffee =>{
            if(coffee.id === id){
                return coffee
            }
        });
        if(coffee && coffee.amount > 1){
            const newCoffeesList = coffeesCart.map(coffee => {
                return coffee.id === id ? {...coffee, amount: coffee.amount - 1} : coffee
            })
            setCoffeesCart(newCoffeesList)
        }
    }

    function IncreaseCart(){
        const coffee = coffeesCart.find(coffee =>{
            if(coffee.id === id){
                return coffee
            }
        });
        if(coffee && coffee.amount < 10){
            const newCoffeesList = coffeesCart.map(coffee => {
                return coffee.id === id ? {...coffee, amount: coffee.amount + 1} : coffee
            })
            setCoffeesCart(newCoffeesList)
        }
    }
    if(!cart){
        return(
        <AmountCoffeeStyles>
           <button onClick={Lower}><Minus weight="bold" size={14}/></button>
           <span>{amount}</span>
           <button onClick={Increase}><Plus weight="bold" size={14}/></button>
        </AmountCoffeeStyles>
        )
    }
    if(cart){
        return(
        <AmountCoffeeStyles>
            <button onClick={LowerCart}><Minus weight="bold" size={14}/></button>
            <span>{amount}</span>
            <button onClick={IncreaseCart}><Plus weight="bold" size={14}/></button>
         </AmountCoffeeStyles>
        )
    }
}