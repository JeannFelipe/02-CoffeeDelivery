import styled from 'styled-components'

export const CheckoutStyles = styled.main`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 0rem 10rem;
    padding-top: 2.5rem;

    h3{
        font-family: 'Baloo 2';
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
    }
`

export const CheckoutLeftStyles = styled.div`
    width: 100%;
    max-width: 640px;
`

export const CheckoutRightStyles = styled.div`
    width: 100%;
    max-width: 448px;
`

export const BaseBlockStyles = styled.div`
    background-color: ${props => props.theme['base-card']};
    padding: 40px;
    border-radius: 6px;
    header{
        display: flex;
    }

    p{
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        margin-bottom: 7px;
        color: ${props => props.theme['base-subtitle']};
    }

    header span{
        font-family: Roboto;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        color: ${props => props.theme['base-text']};
    }
`

export const AddressStyles = styled(BaseBlockStyles)`
    header svg{
        color: ${props => props.theme['yellow-dark']};
        margin-right: 8px;
    }

    form{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 32px;
    }
`

export const PaymentStyles = styled(BaseBlockStyles)`
    margin-top: 12px;
    header svg{
        color: ${props => props.theme['purple-dark']};
        margin-right: 8px;
    }
`


interface widthInput{
    maxwidth?: number;
}

export const InputTextStyles = styled.div<widthInput>`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: ${props => (props.maxwidth ? `${props.maxwidth}px` : 'none')};
    background-color: ${props => props.theme['base-input']};
    border-radius: 4px;
    border: 1px solid ${props => props.theme['base-button']};
    input{
        padding: 12px;
        width: 100%;
        border: 0;
        background-color: transparent;
    }
    span{
        position: relative;
        margin-left: -70px;
        user-select: none;
        font-size: 12px;
        font-family: 'Roboto';
        font-weight: italic;
        color: ${props => props.theme['base-label']}
    }
`

export const PaymentFlex = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Roboto;
    margin-top: 32px;
`

interface selected{
    selected: boolean;
}

export const MethodPayment = styled.div<selected>`
    display: flex;
    align-items: center;
    background-color: ${props => {
        if(props.selected == true){
            return props.theme['purple-light'];
        }
        return props.theme['base-button']
        }};
        padding: 16px;
        border-radius: 6px;
        font-size: 12px;
        width: 178px;
        gap: 12px;
        cursor: pointer;
        border: 1px solid ${props => {
        if(props.selected == true){
            return props.theme['purple']
        }
        return "transparent"
        }};
    svg{
        color: ${props => props.theme.purple}
    }

    span{
        color: ${props => props.theme['base-text']};
        user-select: none;
    }
`

export const CoffeesSelected = styled.div`
    background: ${props => props.theme['base-card']};
    padding: 40px;
    border-radius: 6px 44px 6px 44px;
`

export const PriceBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    button{
        background-color: ${props => props.theme.yellow};
        border: none;
        border-radius: 6px;
        color: white;
        padding: 12px 0px;
        font-weight: bold;
        font-family: 'Roboto';
        margin-top: 24px;
    }
`

export const PriceLayout = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
`

export const Price = styled(PriceLayout)`
    font-size: 14px;
    color: ${props => props.theme['base-text']};
`

export const PriceFull = styled(PriceLayout)`
    font-size: 20px;
    color: ${props => props.theme['base-subtitle']};
    font-weight: bold;
`

