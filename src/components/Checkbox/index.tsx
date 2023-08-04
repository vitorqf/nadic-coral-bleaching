import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Check } from '@phosphor-icons/react';
import { FieldProps } from 'formik';
import { Label } from '../Label';
import { StyledRoot, Wrapper } from './styles';

interface CheckboxProps {
  label: string;
  id: string;
  onCheckedChange?: (checked: boolean) => void;
}

export function Checkbox({ label, id, onCheckedChange }: CheckboxProps) {
  return (
    <Wrapper>
      <StyledRoot defaultChecked id={id} onCheckedChange={onCheckedChange}>
        <RadixCheckbox.Indicator>
          <Check size={16} color='#3B6AE1' weight='bold' />
        </RadixCheckbox.Indicator>
      </StyledRoot>
      <Label htmlFor={id} text={label} />
    </Wrapper>
  );
}
