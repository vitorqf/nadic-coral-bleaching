import { CaretDown } from '@phosphor-icons/react';
import { signOut, useSession } from 'next-auth/react';
import { Name, Wrapper } from './styles';

export function Logged() {
  const { data: session } = useSession();

  const firstName = session?.user.name.split(' ')[0];

  return (
    <Wrapper onClick={() => signOut()}>
      <div>
        Olá, <Name>{firstName}</Name>
      </div>
      <CaretDown size={16} />
    </Wrapper>
  );
}
