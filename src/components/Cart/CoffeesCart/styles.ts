import styled from 'styled-components';

export const CoffeeCartLayout = styled.div`
    display: flex;
    align-items: top;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    border-bottom: 1px solid ${props => props.theme['base-button']};
    padding-bottom: 24px;
    margin-bottom: 24px;
`

export const CoffeeDescription = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.theme['base-subtitle']};
    img{
        width: 100%;
        max-width: 64px;
    }
`
export const CoffeePrice = styled.div`
    color: ${props => props.theme['base-subtitle']};
    font-weight: bold;
`

export const CoffeeBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    height: 100%;
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`