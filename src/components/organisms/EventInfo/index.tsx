import { TextWithIcon } from '@/components/molecules/TextWithIcon';
import { Calendar, Clock, MapPin, UsersThree } from '@phosphor-icons/react';
import { Wrapper } from './styles';

export function EventInfo() {
  return (
    <Wrapper>
      <TextWithIcon text='Qualquer um pode participar' Icon={UsersThree} />
      <TextWithIcon text='13:30 ~ 16:30' Icon={Clock} />
      <TextWithIcon text='Remoto' Icon={MapPin} />
      <TextWithIcon text='13/03/2022' Icon={Calendar} />
    </Wrapper>
  );
}
