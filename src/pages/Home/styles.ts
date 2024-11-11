import styled from "styled-components";
import background from "../../assets/backgroundHeaderCoffe.svg"

export const HeaderBackground = styled.header`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 34rem;
`

export const HeaderLayout = styled.div`
    display: flex;
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 5.75rem 10rem;
`;

export const LeftStyle = styled.div`
    width: 100%;
    max-width: 36.75rem;
`;

export const TitleStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    h1{
        line-height: 130%;
    }

    p{
        font-family: Roboto;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        color: ${props => props.theme["base-subtitle"]}
    }
`;

export const ItensStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    flex-shrink: 0;
    margin-top: 4.12rem;
`;

export const ItemStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        margin-bottom: -1px;
    }
`;

interface colorIconBackground{
    color: "yellow-dark" | "base-text" | "yellow" | "purple"
}

export const IconBackgroundStyle = styled.div<colorIconBackground>`
    display: flex;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: ${props => props.theme[props.color]};

    svg{
        color: ${props => props.theme.white}
    }
`;

export const CoffeesLayout = styled.main`
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 2rem 10rem;

    h2{
        margin-bottom: 3.38rem;
    }
`;
