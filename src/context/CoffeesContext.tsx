import { ReactNode, createContext, useState, useEffect } from 'react';

interface CoffeesProps{
    id: number
    imgUrl: string
    types: [string]
    name: string
    desc: string
    price: string
    amount: number
}

interface CoffeesContextType{
    coffeesList: CoffeesProps[]
    coffeesCart: CoffeesProps[]
    setCoffeesList: (newCoffeesList: CoffeesProps[]) => void
    setCoffeesCart: (newCoffeesCart: CoffeesProps[]) => void
    AddCoffeeCart: ( coffee: CoffeesProps ) => void
    PriceFullCart: () => number
    DeleteCoffee: ( id: number ) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeeContextProviderProps{
    children: ReactNode
}

export function CoffeesContextProvider({ children } : CoffeeContextProviderProps){
    const [ coffeesList , setCoffeesList] = useState<CoffeesProps[]>([
        {
            id: 1,
            imgUrl: 'src/assets/coffees/tradicional.svg',
            types: ['tradicional'],
            name: 'Expresso Tradicional',
            desc: 'O tradicional café feito com água quente e grãos moídos',
            price: '9.90',
            amount: 1,
        },
        {
            id: 2,
            imgUrl: 'src/assets/coffees/americano.svg',
            types: ['tradicional'],
            name: 'Expresso Tradicional',
            desc: 'Expresso diluído, menos intenso que o tradicional',
            price: '9.90',
            amount: 1,
        },
        ])

    const storedStateJSON = localStorage.getItem('@coffe:coffee-cart')
    const [ coffeesCart, setCoffeesCart ] = useState<CoffeesProps[]>(storedStateJSON?JSON.parse(storedStateJSON):[]);

    useEffect(() =>{
        const stateJSON = JSON.stringify(coffeesCart);
        localStorage.setItem('@coffe:coffee-cart', stateJSON)
    }, [coffeesCart])

    function AddCoffeeCart( coffee: CoffeesProps ){
        const newCoffeeCart = coffee

        const Exist = coffeesCart.find(coffee => coffee.id === newCoffeeCart.id)

        if(Exist){
            Exist.amount = newCoffeeCart.amount
            setCoffeesCart([...coffeesCart]);
        }
        else{
            setCoffeesCart([...coffeesCart, newCoffeeCart])
        }
    }

    function DeleteCoffee( id: number ){
        const CoffeesListWithoutDeleted = coffeesCart.find(coffee => coffee.id !== id)
        if(CoffeesListWithoutDeleted){
            console.log(id)
            setCoffeesCart([CoffeesListWithoutDeleted]);
            return
        }
        setCoffeesCart([]); 
    }

    function PriceFullCart(){
        let total = 0
        for(let i = 0; i < coffeesCart.length; i++){
            total = total + parseFloat(coffeesCart[i].price) * coffeesCart[i].amount 
        }
        return total;
    }

    

    return(
        <CoffeesContext.Provider value={{
            coffeesList,
            setCoffeesList,
            coffeesCart,
            setCoffeesCart,
            AddCoffeeCart,
            PriceFullCart,
            DeleteCoffee,
        }}>
            {children}
        </CoffeesContext.Provider>
    )
}