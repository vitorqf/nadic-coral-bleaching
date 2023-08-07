import { Button } from '@/components/atoms/Button';
import { Error } from '@/components/atoms/Error';
import { H5 } from '@/components/atoms/Headings/h5';
import { Checkbox } from '@/components/molecules/Checkbox';
import { Input } from '@/components/molecules/Input';
import { Field, Formik } from 'formik';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { ValidationSchema } from './form-validation-schema';
import { StyledForm, StyledLink } from './styles';

type SignUpFormData = {
  fullname: string;
  email: string;
  email_confirm: string;
  password: string;
  password_confirm: string;
  notifications_agreement: boolean;
};

export function SignUpForm() {
  const [errorMessage, setErrorMessage] = useState('');

  const initialValues: SignUpFormData = {
    fullname: '',
    email: '',
    email_confirm: '',
    password: '',
    password_confirm: '',
    notifications_agreement: false,
  };

  async function handleSubmit(values: SignUpFormData) {
    try {
      const response = await fetch('/api/auth/signup/', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 422) {
        const { error } = await response.json();
        setErrorMessage(error);
        return;
      }

      const user = await response.json();

      if (user) {
        const { email, password } = values;

        signIn('credentials', {
          email,
          password,
        });
      }
      return;
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      {({ errors, touched, isSubmitting, setFieldValue, values }) => (
        <StyledForm>
          <H5 text='Complete seu cadastro abaixo para ficar por dentro do evento' />

          {errorMessage && <Error message={errorMessage} />}

          <Field
            as={Input}
            label='Nome completo'
            id='fullname'
            name='fullname'
            placeholder='Fulano de Tal'
          />
          {touched.fullname && errors.fullname && (
            <Error message={errors.fullname} />
          )}

          <Field
            as={Input}
            label='E-mail'
            id='email'
            name='email'
            type='email'
            placeholder='corais@exemplo.com'
          />
          {touched.email && errors.email && <Error message={errors.email} />}

          <Field
            as={Input}
            label='Confirmar e-mail'
            id='email_confirm'
            name='email_confirm'
            type='email'
            placeholder='corais@exemplo.com'
          />
          {touched.email_confirm && errors.email_confirm && (
            <Error message={errors.email_confirm} />
          )}

          <Field
            as={Input}
            label='Senha'
            id='password'
            name='password'
            type='password'
            placeholder='digite sua senha'
          />
          {touched.password && errors.password && (
            <Error message={errors.password} />
          )}

          <Field
            as={Input}
            label='Confirmar senha'
            id='password_confirm'
            name='password_confirm'
            type='password'
            placeholder='digite sua senha'
          />
          {touched.password_confirm && errors.password_confirm && (
            <Error message={errors.password_confirm} />
          )}

          <Field
            as={Checkbox}
            name='notifications_agreement'
            label='Concordo em receber notificações no e-mail sobre o evento.'
            id='notifications_agreement'
            onCheckedChange={() =>
              setFieldValue(
                'notifications_agreement',
                !values.notifications_agreement
              )
            }
          />
          <Button
            text='Concluir'
            fillContainer
            type='submit'
            disabled={isSubmitting}
            isLoading={isSubmitting}
          />
          <span>
            Já tem uma conta?{' '}
            <StyledLink href='/entrar'>Entre agora</StyledLink>
          </span>
        </StyledForm>
      )}
    </Formik>
  );
}
