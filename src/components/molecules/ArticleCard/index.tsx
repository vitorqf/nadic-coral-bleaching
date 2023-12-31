import { H6 } from '@/components/atoms/Headings/h6';
import { Text } from '@/components/atoms/Text';
import Image from 'next/image';
import { Container, Description, ImageContainer } from './styles';

export function ArticleCard() {
  return (
    <Container>
      <ImageContainer>
        <Image
          src='https://via.placeholder.com/150'
          alt='Imagem do artigo'
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageContainer>
      <Description>
        <Text text='26/01/2022' />
        <H6 text='ArticleCard' />
        <Text
          text='Este artigo discute os efeitos do branqueamento de corais na biodiversidade marinha e explora possíveis soluções'
          color='#B9C0C6'
        />
      </Description>
    </Container>
  );
}
