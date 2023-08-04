import { Label } from '../../atoms/Label';
import { StyledInput, Wrapper } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  id: string;
}

export function Input({ label, id, placeholder, ...rest }: InputProps) {
  return (
    <Wrapper>
      {label && <Label htmlFor={id} text={label} />}
      <StyledInput id={id} placeholder={placeholder} {...rest} />
    </Wrapper>
  );
}
