import { SEO } from '@/components/SEO';
import { EventInfo } from '@/components/organisms/EventInfo';
import { Footer } from '@/components/organisms/Footer';
import { SignUpForm } from '@/components/organisms/SignUpForm';
import { Popularity } from '../components/organisms/Popularity';
import {
  Description,
  LeftColumn,
  StyledContainer,
  Title,
  Wrapper,
} from './styles';

export default function Home() {
  return (
    <>
      <SEO
        title='Branqueamento de Corais'
        description='Descubra os impactos devastadores do branqueamento de corais e saiba como você pode fazer a diferença. Participe do nosso evento e ajude a preservar os recifes de coral, um tesouro marinho em perigo.'
      />
      <Wrapper>
        <StyledContainer>
          <LeftColumn>
            <Title>
              COMBATA: <span>Branqueamento de Corais</span>
            </Title>

            <Description>
              Descubra os impactos{' '}
              <strong>devastadores do branqueamento de corais</strong> e saiba
              como você pode fazer a diferença. Participe do nosso evento e
              ajude a preservar os recifes de coral,{' '}
              <strong>um tesouro marinho em perigo</strong>.
            </Description>

            <EventInfo />

            <Popularity />
          </LeftColumn>

          <SignUpForm />
        </StyledContainer>
      </Wrapper>
      <Footer />
    </>
  );
}
