import { useState } from "react";
import BackCard from "../../components/BackCard";
import FormCard from "../../components/FormCard";
import FrontCard from "../../components/FrontCard";
import { Container, LeftPainel, RightPainel } from "./styled";

const CredCard = () => {
    
    const [dataCard, setDataCard] = useState({
        number: '',
        name: '',
        dataY: '',
        dataM: '',
        cvc: ''
    });

    return (
        <Container>
            <FrontCard data={dataCard} />
            <BackCard code={dataCard.cvc} />
            <LeftPainel />
            <RightPainel>
                <FormCard setDataCard={setDataCard} />
            </RightPainel>
        </Container>
    );
};


export default CredCard;