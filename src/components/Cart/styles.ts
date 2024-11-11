import styled from 'styled-components'

export const CartStyle = styled.div`
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme['yellow-light']};
        padding: 8px;
        border-radius: 6px;
    }
    
    a svg{
        color: ${props => props.theme['yellow-dark']};
    }

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: ${props => props.theme['yellow-dark']};
        width: 20px;
        height: 20px;
        border-radius: 100%;
        top: -46px;
        left: 27px;
        font-family: 'Roboto';
        color: white;
        font-size: 12px;
    }
`;