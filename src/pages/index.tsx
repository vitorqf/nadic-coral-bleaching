import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Container } from '@/styles/defaults';
import { Participating } from '@/components/Participating';
import { SEO } from '@/components/SEO';
import { StyledContainer } from '@/components/Header/styles';
import {
  Calendar,
  Check,
  Clock,
  MapPin,
  UsersThree,
} from '@phosphor-icons/react';
import {
  Description,
  DetailedInfo,
  DetailedInfoItem,
  LeftColumn,
  NumbersContainer,
  RightColumn,
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

          <RightColumn>
            <Checkbox
              label='Concordo em receber notificações no e-mail sobre o evento.'
              id='notificationsAgreement'
            />
          </RightColumn>
        </StyledContainer>
      </Wrapper>
    </>
  );
}
