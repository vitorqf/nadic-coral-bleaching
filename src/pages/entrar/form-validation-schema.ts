import * as yup from 'yup';

export const ValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Por gentileza, forneça um e-mail válido')
    .required('É necessário que informe seu e-mail'),
  password: yup.string().required('É necessário que informe sua senha'),
});
