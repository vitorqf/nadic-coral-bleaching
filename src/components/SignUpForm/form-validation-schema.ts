import * as yup from 'yup';

export const ValidationSchema = yup.object().shape({
  fullname: yup
    .string()
    .required('É necessário que informe seu nome completo')
    .min(3, 'Seu nome deve ter pelo menos 3 caracteres')
    .max(255, 'Seu nome não pode ultrapassar 255 caracteres'),
  email: yup
    .string()
    .email('Por gentileza, forneça um e-mail válido')
    .required('É necessário que informe seu e-mail')
    .max(255, 'Seu e-mail não pode ultrapassar 255 caracteres'),
  email_confirm: yup
    .string()
    .oneOf(['', yup.ref('email')], 'Os e-mails devem ser iguais')
    .required('É necessário que confirme seu e-mail'),
  password: yup
    .string()
    .min(6, 'Sua senha deve ter pelo menos 6 caracteres')
    .max(255, 'Sua senha não pode ultrapassar 255 caracteres')
    .required('É necessário que informe sua senha'),
  password_confirm: yup
    .string()
    .oneOf(['', yup.ref('password')], 'As senhas devem ser iguais')
    .required('É necessário que confirme sua senha'),
  notifications_agreement: yup.boolean().default(false),
});
