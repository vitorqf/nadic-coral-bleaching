import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { H5 } from '../Headings/h5';
import { Input } from '../Input';
import { StyledForm } from './styles';

export function SignUpForm() {
  return (
    <StyledForm>
      <H5 text='Complete seu cadastro abaixo para ficar por dentro do evento' />

      <Input label='Nome completo' id='fullname' placeholder='Fulano de Tal' />
      <Input
        label='E-mail'
        id='email'
        type='email'
        placeholder='corais@exemplo.com'
      />
      <Input
        label='Confirmar e-mail'
        id='email_confirm'
        type='email'
        placeholder='corais@exemplo.com'
      />
      <Input
        label='Senha'
        id='password'
        type='password'
        placeholder='digite sua senha'
      />
      <Input
        label='Confirmar senha'
        id='password_confirm'
        placeholder='digite sua senha'
      />
      <Checkbox
        label='Concordo em receber notificações no e-mail sobre o evento.'
        id='notificationsAgreement'
      />
      <Button text='Concluir' fillContainer type='submit' />
    </StyledForm>
  );
}
