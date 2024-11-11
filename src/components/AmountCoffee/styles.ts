import styled from 'styled-components'

export const AmountCoffeeStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background-color: ${props => props.theme['base-button']};
    padding: 8px;
    width: 72px;
    border-radius: 6px;
    

    button{
       display: flex;
       background-color: transparent;
       border: none;
    }

    button svg{
        color: ${props => props.theme.purple}
    }

    span{
        font-family: 'Roboto';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        width: 20px;
        text-align: center;
        color: ${props => props.theme['base-text']}
    }
`