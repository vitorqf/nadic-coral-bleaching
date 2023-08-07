import * as yup from 'yup';
export const ValidationSchema = yup.object().shape({
  title: yup.string().required('É necessário que informe o título do artigo'),
  description: yup
    .string()
    .required('É necessário que informe a descrição do artigo'),
  article_file: yup
    .mixed()
    .required('É necessário que informe o arquivo do artigo'),
  article_img: yup.mixed().nullable(),
});
