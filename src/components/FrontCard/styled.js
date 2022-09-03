import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(./images/bg-card-front.png);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    height: 180px;
    width: 300px;
    color: hsl(0, 0%, 100%);
    position: absolute;
    top: calc(50vh - 200px - 10px);
    left: calc(30vw - (350px /1.5));
    right: 0;
    bottom: 0;  
    font-size: 15px;
    
    @media (max-width: 1440px) {
        top: 132px;
        left: 40px;
        right: 0;
        bottom: 0;
        z-index: 1;
    }

    div {
        display: flex;
        justify-content: space-between;
        margin: auto 18px;
    }

    img {
        width: 20%;
        height: 20%;
        margin: 18px;
    }

    h1 {
        margin: 8px;
        padding-top: 18px;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
    }

    h2 {
        margin: 8px;
        font-size: 14px;
        font-weight: 400;
    }

    p {
        margin: 8px;
        font-size: 14px;
        font-weight: 400;
    }
`

