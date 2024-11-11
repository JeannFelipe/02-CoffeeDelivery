import styled from 'styled-components'

export const RegionStyle = styled.div`
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme['purple-light']};
        padding: 8px;
        border-radius: 6px;
    }
    
    a svg{
        color: ${props => props.theme['purple-dark']};
    }
`;