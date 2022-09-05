import { useState } from "react";

import { Container } from "./styled";

const SformCard = (props) => {

    const returnForm = (e) => {
        e.preventDefault()
        props?.change(false)

    }

    return (
        <Container>
            <img src="./images/icon-complete.svg" alt="svg confirm" />
            <h1>OBRIGADO</h1>
            <p>Dados do cartão adicionado</p>
            <button onClick={returnForm}>Continue</button>
        </Container>
    )
};


export default SformCard;