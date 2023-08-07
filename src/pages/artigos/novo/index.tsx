import { Button } from '@/components/atoms/Button';
import { Error } from '@/components/atoms/Error';
import { H5 } from '@/components/atoms/Headings/h5';
import { Text } from '@/components/atoms/Text';
import { Input } from '@/components/molecules/Input';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import convertToBase64 from '@/services/convert-to-base-64';
import { Field, Formik } from 'formik';
import { ChangeEvent } from 'react';
import { ValidationSchema } from './form-validation-schema';
import { FileFieldContainer, StyledForm, Wrapper } from './styles';

type NewArticleData = {
  title: string;
  description: string;
  article_file: File | null;
  article_img: File | null;
};

export default function NewArticle() {
  const initialValues: NewArticleData = {
    title: '',
    description: '',
    article_file: null,
    article_img: null,
  };

  async function handleSubmit(values: NewArticleData) {
    if (values.article_file) {
      const base64File = await convertToBase64(values.article_file);
      console.log(base64File);
    }

    if (values.article_img) {
      const base64Image = await convertToBase64(values.article_img);
      console.log(base64Image);
    }
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={ValidationSchema}
        >
          {({ errors, touched, setFieldValue }) => (
            <StyledForm>
              <H5 text='Publique um novo artigo' />
              <Field
                as={Input}
                name='title'
                label='Título'
                placeholder='A interferência da vida humana nos oceanos'
                isRequired
              />
              {touched.title && errors.title && (
                <Error message={errors.title} />
              )}

              <Field
                as={Input}
                isTextarea
                rows={10}
                name='description'
                label='Descrição'
                isRequired
                placeholder='Forneça uma breve descrição sobre seu artigo, contendo informações relevantes sobre ele'
              />
              {touched.description && errors.description && (
                <Error message={errors.description} />
              )}

              <FileFieldContainer>
                <Field
                  as={Input}
                  label='Artigo'
                  name='article_file_input'
                  isRequired
                  type='file'
                  accept='.pdf, .docx'
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    if (event.currentTarget.files) {
                      setFieldValue(
                        'article_file',
                        event.currentTarget.files[0]
                      );
                    }
                  }}
                />
                <Text text='Apenas formato .pdf, .docx com tamanho menor que 10MB.' />
              </FileFieldContainer>
              {touched.article_file && errors.article_file && (
                <Error message={errors.article_file} />
              )}

              <FileFieldContainer>
                <Field
                  as={Input}
                  name='article_img_input'
                  label='Imagem'
                  type='file'
                  accept='.jpg, .png, .jpeg'
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    if (event.currentTarget.files) {
                      setFieldValue(
                        'article_img',
                        event.currentTarget.files[0]
                      );
                    }
                  }}
                />
                <Text text='Apenas formato .jpg, .png, .jpeg com tamanho menor que 10MB.' />
              </FileFieldContainer>
              {touched.article_img && errors.article_img && (
                <Error message={errors.article_img} />
              )}

              <Button
                type='submit'
                text='publicar'
                fillContainer
                style={{ marginBlock: '16px' }}
              />
            </StyledForm>
          )}
        </Formik>
      </Wrapper>
      <Footer />
    </>
  );
}
