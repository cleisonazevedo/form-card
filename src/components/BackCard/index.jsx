import { Container } from "./styled";

const BackCard = (props) => {
    const defaultCodeCard = "000";
    const codeCard = props?.code.length < 1 ? defaultCodeCard : props.code;
    console.log('codeCard', codeCard)
    return (
        <Container>
            <p>
                {codeCard}
            </p>
        </Container>
    );
};


export default BackCard;