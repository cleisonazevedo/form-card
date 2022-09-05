import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 100px;
        height: 100px;
        margin: 12px;
    }
    
    h1 {
        font-size: 30px;
        margin: 8px;
        color: hsl(278, 94%, 30%);
        font-weight: 500;
    }

    p {
        color: hsl(279, 6%, 55%);
        margin: 8px;
    }

    button {
        margin: 12px;
        margin-top: 24px;
        max-width: 500px;
        width: 300px;
        border: none;
        border-radius: 5px;
        padding: 12px;
        color: hsl(0, 0%, 100%);
        background-color: hsl(278, 68%, 11%);
        cursor: pointer;
    }
`