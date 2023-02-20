import { FooterWrapper, ContentWrapper, CopyrightWrapper, MissionWrapper } from './style';

import Title from '../UI/Title/Title';
import ContactSection from './ContactSection/ContactSection';

import dataContact from '../../data/dataContact';

//Get Current Year
const currentTime = new Date();
const getCurrentYear = () => currentTime.getFullYear();

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <ContentWrapper>
        <MissionWrapper>
          <Title small secondary>
            MISJA
          </Title>
          <p>
            Naszą misją jest dostarczanie niezawodnych rozwiązań dla branży telekomunikacyjnej
            poprzez zapewnienie najlepszej jakości usług i kompetentnej obsługi naszych klientów.
            Dążymy do ciągłego rozwoju i ulepszania naszych procesów, aby zapewnić naszym klientom
            najlepszą wartość i efektywne realizacje projektów.
          </p>
        </MissionWrapper>

        <ContactSection dataContact={dataContact} />
      </ContentWrapper>

      <CopyrightWrapper>
        <p>LK-NET Sp. z o.o. © {getCurrentYear()}. Wszelkie prawa zastrzeżone</p>
      </CopyrightWrapper>
    </FooterWrapper>
  );
};

export default Footer;
