import styled from "styled-components";

export const InputCustom = styled.input`
   /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }

    width: ${props => props.width};
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    outline: 0;
    padding: 8px;
    margin: 4px 4px;
    /* max-width: 500px; */
    :hover {
        border-color: ${props => props.errorformik == undefined ? 'hsl(249, 99%, 64%)' : 'hsl(0, 100%, 66%)'};
    }

    :focus {
        border-color: ${props => props.errorformik == undefined ? 'hsl(249, 99%, 64%)' : 'hsl(0, 100%, 66%)'};
    }
    border-color: ${props => props.errorformik == undefined ? '#d3d3d3' : 'hsl(0, 100%, 66%)'};
        
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    color: hsl(278, 68%, 11%);
    margin: auto;
    
        /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
    label {
        margin: 4px 4px;
    }
    /* input {        
        border-radius: 5px;
        border: 1px solid #d3d3d3;
        outline: 0;
        padding: 8px;
        margin: 4px 4px;
        max-width: 500px;
        
        :hover {
            border-color: hsl(249, 99%, 64%);
        }

        :focus {
            border-color: hsl(249, 99%, 64%);
        }
    } */
    button {
        margin: 12px;
        margin-top: 24px;
        max-width: 500px;
        border: none;
        border-radius: 5px;
        padding: 12px;
        color: hsl(0, 0%, 100%);
        background-color: hsl(278, 68%, 11%);
        cursor: pointer;
    }
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4px;
    padding: 4px;
    /* input {
        border-color: ${props => props.errorformik == undefined ? '#d3d3d3' : 'hsl(0, 100%, 66%)'};
        :hover {
            border-color: ${props => props.errorformik == undefined ? 'hsl(249, 99%, 64%)' : 'hsl(0, 100%, 66%)'};
        }
    } */
`

export const InputCode = styled.div`
    display: flex;
    flex-direction: row;
    margin: 4px;
    padding: 4px;
    max-width: 500px;

    .date-layout {
        display: flex;
        flex-direction: column;  
        max-width: 180px;
        /* input {
            max-width: 40%;
        } */
    }
    .date-input {
        display: flex;
        flex-direction: row;
    }
    .cvc-input {
        display: flex;
        flex-direction: column;               
        margin-left: 30px;

        /* input {
            max-width: 200px;
        } */
    }
`

export const InfoError = styled.div`
    color: hsl(0, 100%, 66%);
    margin: 0 4px;
`;