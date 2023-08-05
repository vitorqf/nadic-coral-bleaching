import { Participating } from '@/components/molecules/Participating';
import { Wrapper } from './styles';

export function Popularity() {
  return (
    <Wrapper>
      <Participating number='+2.134' title='artigos inscritos' />
      <Participating number='+343.432' title='pessoas inscritas' />
    </Wrapper>
  );
}
