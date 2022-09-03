import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    
    @media (max-width: 1440px) {
        flex-direction: column;
    }
`;

export const LeftPainel = styled.div`
    display: flex;
    background-image: url(./images/bg-main-desktop.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 30vw;

    @media (max-width: 1440px) {
        flex-direction: column;
        height: 250px;
        width: 100vw;
    }
`;

export const RightPainel = styled.div`
    display: flex;   
    height: 100vh;   
    margin: auto;

    @media (max-width: 1440px) {
        flex-direction: column;      
        height: 300px;  
        margin-top: 100px;
    }
`;