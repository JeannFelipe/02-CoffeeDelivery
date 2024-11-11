import styled from 'styled-components'

export const DeleteCoffeeStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background-color: ${props => props.theme['base-button']};
    padding: 8px;
    border-radius: 6px;
    width: 91px;

    button{
       display: flex;
       background-color: transparent;
       align-items: center;
       border: none;
       gap: 4px;
       height: 19px;
    }

    button svg{
        color: ${props => props.theme.purple}
    }

    span{
        font-family: 'Roboto';
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        text-align: center;
        color: ${props => props.theme['base-text']}
    }
`