import { Calendar, Clock, MapPin, UsersThree } from '@phosphor-icons/react';
import { Footer } from '@/components/organisms/Footer';
import { Participating } from '@/components/molecules/Participating';
import { SEO } from '@/components/SEO';
import { SignUpForm } from '@/components/organisms/SignUpForm';
import {
  Description,
  DetailedInfo,
  DetailedInfoItem,
  LeftColumn,
  NumbersContainer,
  StyledContainer,
  Title,
  Wrapper,
} from './styles';

export default function Home() {
  return (
    <>
      <SEO title='Home' description='Home page' />
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

            <DetailedInfo>
              <DetailedInfoItem>
                <UsersThree size={24} color='#3B6AE1' />
                <span>Qualquer um pode participar</span>
              </DetailedInfoItem>

              <DetailedInfoItem>
                <Clock size={24} color='#3B6AE1' />
                <span>13:30 ~ 16:30</span>
              </DetailedInfoItem>

              <DetailedInfoItem>
                <MapPin size={24} color='#3B6AE1' />
                <span>Remoto</span>
              </DetailedInfoItem>

              <DetailedInfoItem>
                <Calendar size={24} color='#3B6AE1' />
                <span>13/03/2022</span>
              </DetailedInfoItem>
            </DetailedInfo>

            <NumbersContainer>
              <Participating number='+2.134' title='artigos inscritos' />
              <Participating number='+343.432' title='pessoas inscritas' />
            </NumbersContainer>
          </LeftColumn>

          <SignUpForm />
        </StyledContainer>
      </Wrapper>
      <Footer />
    </>
  );
}
