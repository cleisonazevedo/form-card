import * as Yup from 'yup';

export const validation = Yup.object({
    name: Yup.string().required('Obrigatorio').min(3, 'no minimo 3 caracteres').matches(/^[aA-zZ\s]+$/, "Somente letras"),
    number: Yup.number().typeError('Somente numeros').required('Obrigatorio').test('len', '16 digitos', val => val?.toString().length === 16),
    dataM: Yup.number().typeError('Somente numeros').required('Obrigatorio').test('len', '2 digitos', val => val?.toString().length === 2),
    dataY: Yup.number().typeError('Somente numeros').required('Obrigatorio').test('len', '2 digitos', val => val?.toString().length === 2),
    cvc: Yup.number().typeError('Somente numeros').required('Obrigatorio').test('len', '3 digitos', val => val?.toString().length === 3)
  })
// export function isValidCardNumber(num) {
//     return isNaN(num) || num.length > 16;
// }

// export function isValidNumber(num) {    
//     return isNaN(num) || num.length > 2;
// }

// export function isValidCode(num) {
//     return isNaN(num) || num.length > 3;
// }