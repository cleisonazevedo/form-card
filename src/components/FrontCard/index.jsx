import { Container } from "./styled";

function formatNumber (number) {
    let count = 0;
    let formatedNum = '';
    for(let elem of number){        
        if(count == 4) {
            formatedNum += ' ';
            count = 0;
        }
        count++;
        formatedNum += elem;
    }
    return formatedNum;
}

const FrontCard = (props) => {
    const defaultData = {
        number: "0000 0000 0000 0000",
        name: "Jane Appleseed",
        dataM: "00",
        dataY: "00"
    };

    const dataCard = props.data;
    
    return (        
        <Container>
            <img src="./images/card-logo.svg" alt="cartao logo" />
            <h1>{dataCard.number.length < 1 ? defaultData.number : formatNumber(dataCard.number)}</h1>
            <div>
                <h2>{dataCard.name.length < 1 ? defaultData.name : dataCard.name}</h2>
                <p>
                    {dataCard.dataM.length < 1 
                    ? defaultData.dataM: 
                    defaultData.dataM}
                    /
                    {dataCard.dataY.length < 1 
                    ? defaultData.dataY: 
                    defaultData.dataY}
                </p>
            </div>
        </Container>
    );
};


export default FrontCard;