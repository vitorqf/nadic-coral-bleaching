import { StyledLabel } from './styles';

type LabelProps = {
  htmlFor: string;
  text: string;
};

export function Label({ htmlFor, text }: LabelProps) {
  return <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>;
}
