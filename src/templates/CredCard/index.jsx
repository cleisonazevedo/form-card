import { useState } from "react";
import BackCard from "../../components/BackCard";
import FormCard from "../../components/FormCard";
import FrontCard from "../../components/FrontCard";
import SformCard from "../../components/SformCard";
import { Container, LeftPainel, RightPainel } from "./styled";

const CredCard = () => {
    
    const [dataCard, setDataCard] = useState({
        number: '',
        name: '',
        dataY: '',
        dataM: '',
        cvc: ''
    });

    const [isSubmited, setIsSubmited] = useState(false);
        

    return (
        <Container>
            <FrontCard data={dataCard} />
            <BackCard code={dataCard.cvc} />
            <LeftPainel />
            <RightPainel>
                {
                    isSubmited
                ? 
                    <SformCard change={setIsSubmited}/>
                :
                    <FormCard setDataCard={setDataCard} setIsSubmited={setIsSubmited} />
                    
                }
                
            </RightPainel>
        </Container>
    );
};


export default CredCard;