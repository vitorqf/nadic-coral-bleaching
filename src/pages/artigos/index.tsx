import { Header } from '@/components/organisms/Header';
import { SEO } from '@/components/SEO';

export default function Articles() {
  return (
    <>
      <SEO
        title='Meus artigos'
        description='Listagem dos seus artigos publicados, você pode visualizá-los em forma de grade.'
      />
      <Header />
    </>
  );
}
