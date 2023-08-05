import { Text } from '@/components/atoms/Text';
import { Icon } from '@phosphor-icons/react';
import { Wrapper } from './styles';

type TextIconProps = {
  text: string;
  Icon: Icon;
};

export function TextWithIcon({ text, Icon }: TextIconProps) {
  return (
    <Wrapper>
      <Icon size={24} color='#3B6AE1' />
      <Text text={text} color='white' />
    </Wrapper>
  );
}
