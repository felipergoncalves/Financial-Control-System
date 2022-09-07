import Styled from "styled-components";

export const Container = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 15px;
    width: 30%;

    @media(max-width: 750px){
        width: 20%;

        p{
            font-size: 12px
        }

        span{
            font-size: 20px;
        }

        svg{
            display: none
        }
    }
`;

export const Header = Styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin: 20px auto; 

    svg{
        width: 25px;
        height: 25px;
    }
`;

export const HeaderTitle = Styled.p`
    font-size: 20px;
`;

export const Total = Styled.span`
    font-size: 30px;
    font-weight: bold;
`;