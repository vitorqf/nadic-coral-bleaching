import { Label } from '../../atoms/Label';
import { StyledInput, StyledTextArea, Wrapper } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  id: string;
  isTextarea?: boolean;
}

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  id: string;
  isTextarea?: boolean;
  isRequired?: boolean;
}

export function Input({
  label,
  id,
  placeholder,
  isTextarea = false,
  isRequired = false,
  ...rest
}: InputProps & TextAreaProps) {
  return (
    <Wrapper>
      {label && <Label htmlFor={id} text={label} required={isRequired} />}
      {!isTextarea ? (
        <StyledInput id={id} placeholder={placeholder} {...rest} />
      ) : (
        <StyledTextArea id={id} placeholder={placeholder} {...rest} />
      )}
    </Wrapper>
  );
}
