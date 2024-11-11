import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CoffeesLayout, HeaderBackground, HeaderLayout, IconBackgroundStyle, ItemStyle, ItensStyle, LeftStyle, TitleStyle } from "./styles";
import coffeHeader from "../../assets/coffeeHeader.svg"
import { Coffees } from "../../components/Home/Coffees";

export function Home(){
    return(
        <>
        <HeaderBackground>
            <HeaderLayout>
                <LeftStyle>
                    <TitleStyle>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </TitleStyle>
                    <ItensStyle>
                        <ItemStyle>
                            <IconBackgroundStyle color="yellow-dark">
                            <ShoppingCart size={16} weight="fill" />
                            </IconBackgroundStyle>
                            <p>Compra simples e segura</p>
                        </ItemStyle>
                        <ItemStyle>
                            <IconBackgroundStyle color="base-text">
                            <Package size={16} weight="fill" />
                            </IconBackgroundStyle>
                            <p>Embalagem mantém o café intacto</p>
                        </ItemStyle>
                        <ItemStyle>
                            <IconBackgroundStyle color="yellow">
                            <Timer size={16} weight="fill" />
                            </IconBackgroundStyle>
                            <p>Compra simples e segura</p>
                        </ItemStyle>
                        <ItemStyle>
                            <IconBackgroundStyle color="purple">
                            <Coffee size={16} weight="fill" />
                            </IconBackgroundStyle>
                            <p>Compra simples e segura</p>
                        </ItemStyle>
                    </ItensStyle>
                </LeftStyle>
                <img src={coffeHeader} />
            </HeaderLayout>
        </HeaderBackground>
        <CoffeesLayout>
            <h2>Nossos Cafés</h2>
            <Coffees />
        </CoffeesLayout>
        </>
    )
}