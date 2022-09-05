import { useFormik } from 'formik';
import { useEffect } from 'react';
import { validation } from "../../utils/validators";
import { Form, InfoError, InputCode, InputCustom, Inputs } from "./styled";

const FormCard = (props) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            dataM: '',
            dataY: '',
            cvc: '',
        },
        validationSchema: validation,
        onSubmit: values => {
            console.log('valores', values)
            props.setIsSubmited(true);
        }
    })
    
    useEffect(() => {       
        props.setDataCard(formik.values)
    },[formik.values])

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Inputs>
                <label>CARDHOLDER NAME</label>
                <InputCustom
                    errorformik={formik.errors.name && formik.touched.name ? formik.errors.name : undefined}
                    type="text"
                    name="name"
                    placeholder="e.g. Jane Appleseed"
                    // required
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    maxLength={20}
                />
                {formik.touched.name && formik.errors.name ? (
                    <InfoError>{formik.errors.name}</InfoError>
                ) : null}
            </Inputs>

            <Inputs >
                <label>CARD NUMBER</label>
                <InputCustom
                    errorformik={formik.errors.number && formik.touched.number ? formik.errors.number : undefined}
                    type="text"
                    name="number"
                    placeholder="e.g. 1234 5678 9123 0000"
                    // required
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    maxLength={16}
                />
                {formik.touched.number && formik.errors.number ? (
                    <InfoError>{formik.errors.number}</InfoError>
                ) : null}
            </Inputs>

            <InputCode>
                <div className="date-layout">
                    <label >EXP. DATE (MM/YY)</label>
                    <div className="date-input">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <InputCustom
                                errorformik={formik.errors.dataM && formik.touched.dataM ? formik.errors.dataM : undefined}
                                width={'60px'}
                                type="text"
                                name="dataM"
                                placeholder="MM"
                                // required
                                value={formik.values.dataM}
                                onChange={formik.handleChange}
                                maxLength={2}
                            // onChange={(e) => { !isValidNumber(e.target.value) && setMonth(e.target.value)}}
                            />
                            {formik.touched.dataM && formik.errors.dataM ? (
                                <InfoError>{formik.errors.dataM}</InfoError>
                            ) : null}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <InputCustom
                                errorformik={formik.errors.dataY && formik.touched.dataY ? formik.errors.dataY : undefined}
                                width={'60px'}
                                type="text"
                                name="dataY"
                                placeholder="YY"
                                // required
                                value={formik.values.dataY}
                                onChange={formik.handleChange}
                                maxLength={2}
                            />
                            {formik.touched.dataY && formik.errors.dataY ? (
                                <InfoError>{formik.errors.dataY}</InfoError>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="cvc-input">
                    <label >CVC</label>
                    <InputCustom
                        errorformik={formik.errors.cvc && formik.touched.cvc ? formik.errors.cvc : undefined}
                        width={'120px'}
                        type="text"
                        name="cvc"
                        placeholder="e.g. 123"
                        // required
                        value={formik.values.cvc}
                        onChange={formik.handleChange}
                        maxLength={3}
                    />
                    {formik.touched.cvc && formik.errors.cvc ? (
                        <InfoError>{formik.errors.cvc}</InfoError>
                    ) : null}
                </div>
            </InputCode>
            <button type="submit" >Confirm</button>
        </Form>
    )
};


export default FormCard;