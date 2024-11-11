import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { useContext, useState } from "react";
// import { useForm } from "react-hook-form"
// import * as zod from 'zod';

import { AddressStyles, PaymentStyles, CheckoutLeftStyles, CheckoutRightStyles, CheckoutStyles, InputTextStyles, PaymentFlex, MethodPayment, CoffeesSelected, Price, PriceBlock, PriceFull } from "./styles";
import { CoffeesCart } from "../../components/Cart/CoffeesCart";
import { CoffeesContext } from "../../context/CoffeesContext";

export function Checkout(){

    const { PriceFullCart } = useContext(CoffeesContext)

    const priceFullCoffee = PriceFullCart().toFixed(2).toString().replace(/\./g, ',');

    const priceFrete =  3.50.toFixed(2).toString().replace(/\./g, ',');

    const priceFull =  3.50 + PriceFullCart()
    const priceFullWithVirgula = priceFull.toFixed(2).toString().replace(/\./g, ',');

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(!event){
            return
        }
        
        const form = document.forms[0];

        if(form.cep.value == '' || form.rua.value == '' || form.numeroCasa.value == '' || form.bairro.value == '' || form.cidade.value == '' || form.uf.value == ''){
            console.log("nulo")
        }
    }

    const checkCEP = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(!event){
            return;
        }
        const form = document.forms[0];
        
        let valor = form.cep.value.replace(/\D/g, '');

        if (valor.length > 5) {
            valor = valor.substring(0, 5) + '-' + valor.substring(5);
        }

        form.cep.value = valor
    }

    const onlyNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(!event){
            return;
        }

        const valor = event.target;

        const valorFormated = valor.value.replace(/\D/g, '');


        valor.value = valorFormated;
    }

    const onlyLetters =  (event: React.ChangeEvent<HTMLInputElement>) => {
        if(!event){
            return;
        }
        
        const valor = event.target;

        const valorFormated = valor.value.replace(/[^a-zA-Z\s.,!'"-]/g, '');

        valor.value = valorFormated;
    }

    const onlyLettersUppers =  (event: React.ChangeEvent<HTMLInputElement>) => {
        if(!event){
            return;
        }
        
        const valor = event.target;

        const valorFormated = valor.value.replace(/[^a-zA-Z\s.,!'"-]/g, '');

        valor.value = valorFormated.toUpperCase();
    }

    const [methodPay, setMethodPay] = useState("Crédito")

    return(
        
        <CheckoutStyles>
            <CheckoutLeftStyles>
                <h3>Complete seu pedido</h3>
                <AddressStyles>
                    <header>
                        <MapPinLine size={22}/>
                        <div>
                            <p>Endereço de Entrega</p>
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </div>
                    </header>
                    <form name="CEP">
                        <InputTextStyles maxwidth={200}>
                            <input type="text" placeholder="CEP" id="cep" onChange={checkCEP} maxLength={9}/>
                        </InputTextStyles>
                        <InputTextStyles>
                            <input type="text" placeholder="Rua" id="rua" maxLength={40}/>
                        </InputTextStyles>
                        <InputTextStyles maxwidth={200}>
                            <input type="text" placeholder="Número" id="numeroCasa" maxLength={4} onChange={onlyNumber}/>
                        </InputTextStyles>
                        <InputTextStyles maxwidth={348}>
                            <input type="text" placeholder="Complemento" id="complemento" maxLength={25}/>
                            <span>Opcional</span>
                        </InputTextStyles>
                        <InputTextStyles maxwidth={200}>
                            <input type="text" placeholder="Bairro" id="bairro" maxLength={20} onChange={onlyLetters}/>
                        </InputTextStyles>
                        <InputTextStyles maxwidth={276}>
                            <input type="text" placeholder="Cidade" id="cidade" maxLength={30} onChange={onlyLetters}/>
                        </InputTextStyles>
                        <InputTextStyles maxwidth={60}>
                            <input type="text" placeholder="UF" id="uf" maxLength={2} onChange={onlyLettersUppers}/>
                        </InputTextStyles>
                    </form>
                    <form name="teste">

                    </form>
                </AddressStyles>
                <PaymentStyles>
                    <header>
                        <CurrencyDollar size={22}/>
                        <div>
                            <p>Pagamento</p>
                            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                        </div>
                    </header>
                    <PaymentFlex>
                        <MethodPayment selected={methodPay == "Crédito"} onClick={() => setMethodPay("Crédito")}>
                            <CreditCard size={16}/>
                            <span>CARTÃO DE CRÉDITO</span>
                        </MethodPayment>
                        <MethodPayment selected={methodPay == "Débito"} onClick={() => setMethodPay("Débito")}>
                            <Bank size={16}/>
                            <span>CARTÃO DE DÉBITO</span>
                        </MethodPayment>
                        <MethodPayment selected={methodPay == "Dinheiro"} onClick={() => setMethodPay("Dinheiro")}>
                            <Money size={16}/>
                            <span>DINHEIRO</span>
                        </MethodPayment>
                    </PaymentFlex>
                </PaymentStyles>
            </CheckoutLeftStyles>
            <CheckoutRightStyles>
                <h3>Cafés Selecionados</h3>
                <CoffeesSelected>
                    <CoffeesCart />
                    <PriceBlock>
                        <Price><p>Total de itens</p><span>R$  {priceFullCoffee}</span></Price>
                        <Price><p>Entrega</p><span>R$  {priceFrete}</span></Price>
                        <PriceFull><p>Total</p><span>R$  {priceFullWithVirgula}</span></PriceFull>
                        <button onClick={handleSubmit}>CONFIRMAR PEDIDO</button>
                    </PriceBlock>
                </CoffeesSelected>
            </CheckoutRightStyles>
            </CheckoutStyles>
    )
}