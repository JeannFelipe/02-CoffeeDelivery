import styled from 'styled-components'

export const CoffeeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
`

export const CoffeeStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 256px;
    background-color: ${props => props.theme['base-card']};
    border-radius: 0.375rem 2.25rem;
    margin-bottom: 2.5rem;
    padding-bottom: 20px;

    img{
        width: 120px;
        margin-top: -20px;
    }

    h3{
        margin-bottom: 0.5rem;
    }

    p{
        text-align: center;
        color: ${props => props.theme['base-label']};
        font-family: Roboto;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        margin: 0px 1.25rem;
    }
`

export const CoffeTypesStyle = styled.span`
    margin-top: 0.75rem;
    margin-bottom: 1.25rem;
`

export const CoffeTypeItemStyle = styled.span`
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    text-transform: uppercase;
    font-family: Roboto;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
`

export const InteractionStyle = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 33px;

    p{
        color: ${props => props.theme["base-text"]};
        font-family: 'Baloo 2';
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 800;
        margin: 0;
        margin-right: 15px;
    }

    p span{
        font-family: Roboto;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
    }

    &>button{
        display: flex;
        padding: 0.5rem;
        background-color: ${props => props.theme.purple};
        border-radius: 8px;
        border: 0;
    }

    &>button svg{
        color: ${props => props.theme.white}
    }
`