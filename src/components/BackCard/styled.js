import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(./images/bg-card-back.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    height: 180px;
    width: 300px;
    color: hsl(0, 0%, 100%);
    border: solid 1px gray;    
    position: absolute;
    top: calc(50vh + 10px);
    left: calc(30vw - (350px /3));
    right: 0;
    bottom: 0;
    font-size: 18px;

    @media (max-width: 1440px) {
        top: 30px;
        left: 100px;
        right: 0;
        bottom: 0;
    }

    p {        
        margin: auto 240px;
        padding-bottom: 5px;
    }
`

