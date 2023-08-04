import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Check } from '@phosphor-icons/react';
import { Label, StyledRoot, Wrapper } from './styles';

type CheckboxProps = {
  label: string;
  id: string;
};

export function Checkbox({ label, id }: CheckboxProps) {
  return (
    <Wrapper style={{ display: 'flex', alignItems: 'center' }}>
      <StyledRoot defaultChecked id={id}>
        <RadixCheckbox.Indicator>
          <Check size={16} color='#3B6AE1' weight='bold' />
        </RadixCheckbox.Indicator>
      </StyledRoot>
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
}
