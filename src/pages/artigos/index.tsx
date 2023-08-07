import { SEO } from '@/components/SEO';
import { H5 } from '@/components/atoms/Headings/h5';
import { ArticleCard } from '@/components/molecules/ArticleCard';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { Grid, StyledContainer, Wrapper } from './styles';

export default function Articles() {
  return (
    <>
      <SEO
        title='Meus artigos'
        description='Listagem dos seus artigos publicados, você pode visualizá-los em forma de grade.'
      />
      <Header />
      <Wrapper>
        <StyledContainer>
          <H5 text='Meus artigos' />
          <Grid>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </Grid>
        </StyledContainer>
      </Wrapper>
      <Footer />
    </>
  );
}
