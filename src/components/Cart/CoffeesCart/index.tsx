import { useContext } from "react";
import { CoffeesContext } from "../../../context/CoffeesContext";
import { CoffeeBtn, CoffeeCartLayout, CoffeeDescription, CoffeePrice, Flex } from "./styles";
import { AmountCoffee } from "../../AmountCoffee";
import { DeleteCoffeeBtn } from "../../DeleteCoffee";


export function CoffeesCart(){
    const { coffeesCart } = useContext(CoffeesContext)

    return(
        <div>
            { coffeesCart.map(coffee =>{
                const priceCoffee = parseFloat(coffee.price) * coffee.amount;
                const PriceCoffeeWithVirgula = priceCoffee.toFixed(2).toString().replace(/\./g, ',');

                return(
                    <CoffeeCartLayout>
                        <CoffeeDescription>
                        <img src={coffee.imgUrl}/>
                            <CoffeeBtn>
                            <p>{coffee.name}</p>
                            <Flex>
                            <AmountCoffee cart={true} id={coffee.id} amount={coffee.amount}/>
                            <DeleteCoffeeBtn id={coffee.id}/>
                            </Flex>
                            </CoffeeBtn>
                        </CoffeeDescription>
                        <CoffeePrice>
                            <span>R$  {PriceCoffeeWithVirgula}</span>
                        </CoffeePrice>
                    </CoffeeCartLayout>
                )
            })}
        </div>
    )
}