import { SEO } from '@/components/SEO';
import { Button } from '@/components/atoms/Button';
import { Error } from '@/components/atoms/Error';
import { H4 } from '@/components/atoms/Headings/h4';
import { Text } from '@/components/atoms/Text';
import { Checkbox } from '@/components/molecules/Checkbox';
import { Input } from '@/components/molecules/Input';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { Field, Formik } from 'formik';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { ValidationSchema } from './form-validation-schema';
import {
  FormHeader,
  LoginFormContainer,
  StyledContainer,
  StyledForm,
  Wrapper,
} from './styles';

type LoginFormData = {
  email: string;
  password: string;
  remember: boolean;
};

export default function Login() {
  const initialValues: LoginFormData = {
    email: '',
    password: '',
    remember: false,
  };

  const { data: session } = useSession();

  async function handleSubmit(values: LoginFormData) {
    const { email, password } = values;

    signIn('credentials', {
      email,
      password,
      callbackUrl: `/`,
    });
  }

  console.log(session?.user);

  return (
    <>
      <SEO title='Login' description='SDAasdk' />
      <Header showOnlyLogo center />
      <Wrapper>
        <StyledContainer>
          <LoginFormContainer>
            <FormHeader>
              <H4 text='Boas vindas ao evento' />
              <Text text='Faça login para ver e publicar novos artigos' />
            </FormHeader>

            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={ValidationSchema}
            >
              {({ values, errors, isSubmitting, setFieldValue, touched }) => (
                <StyledForm>
                  <Field
                    as={Input}
                    placeholder='corais@exemplo.com'
                    name='email'
                    id='email'
                    type='email'
                    label='E-mail'
                  />
                  {touched.email && errors.email && (
                    <Error message={errors.email} />
                  )}

                  <Field
                    as={Input}
                    placeholder='digite sua senha'
                    name='password'
                    id='password'
                    type='password'
                    label='Senha'
                  />
                  {touched.password && errors.password && (
                    <Error message={errors.password} />
                  )}

                  <Field
                    as={Checkbox}
                    name='remember'
                    id='remember'
                    label='Mantenha-me conectado'
                    onCheckedChange={() =>
                      setFieldValue('remember', !values.remember)
                    }
                  />

                  <Button
                    text='Entrar'
                    fillContainer
                    type='submit'
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                  />
                </StyledForm>
              )}
            </Formik>
          </LoginFormContainer>

          <Image
            src='/assets/art/octopus.svg'
            alt='Imagem de polvo desenhado'
            width={500}
            height={500}
          />
        </StyledContainer>
      </Wrapper>
      <Footer />
    </>
  );
}
