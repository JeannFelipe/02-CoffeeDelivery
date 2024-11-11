import { Trash } from "@phosphor-icons/react";
import { DeleteCoffeeStyles } from "./styles";
import { useContext } from 'react'
import { CoffeesContext } from "../../context/CoffeesContext";

interface DeleteCoffeeProps{
    id: number;
}

export function DeleteCoffeeBtn({ id }: DeleteCoffeeProps){
    const { DeleteCoffee } = useContext(CoffeesContext)

    function Delete(){
        DeleteCoffee(id)
    }
    return(
        <DeleteCoffeeStyles>
            <button onClick={Delete}><Trash weight="bold" size={14}/><span>REMOVER</span></button>
        </DeleteCoffeeStyles>
   ) 
}