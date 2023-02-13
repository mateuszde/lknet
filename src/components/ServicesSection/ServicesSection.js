import { ServicesSectionWrapper, Wrapper } from './style';
import Title from '../UI/Title/Title';

import ServicesCards from './ServicesCards/ServicesCards';

const ServicesSection = ({ data }) => {
  return (
    <ServicesSectionWrapper>
      <Wrapper>
        <div>
          <Title>NASZE USŁUGI</Title>
          <p>
            Jako lider w dziedzinie zaawansowanych rozwiązań dla branży telekomunikacyjnej,
            oferujemy szeroką gamę usług, takich jak spawanie i pomiar światłowodów, wdmuchiwanie
            kabli, prace ziemne oraz przewierty sterowane. Nasi eksperci posiadają wieloletnie
            doświadczenie w branży i gwarantujcą najwyższą jakość pracy. Zapewniamy bezpieczeństwo i
            efektywność w realizacji naszych projektów. Skontaktuj się z nami już dziś, aby
            dowiedzeić się więcej o naszych usługach.{' '}
          </p>
        </div>
        <div>
          <ServicesCards data={data} />
        </div>
      </Wrapper>
    </ServicesSectionWrapper>
  );
};

export default ServicesSection;
