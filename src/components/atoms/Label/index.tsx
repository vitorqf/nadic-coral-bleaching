import { Asterisk, StyledLabel } from './styles';

type LabelProps = {
  htmlFor: string;
  text: string;
  required?: boolean;
};

export function Label({ htmlFor, text, required = false }: LabelProps) {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {text}
      {required && <Asterisk>*</Asterisk>}
    </StyledLabel>
  );
}
