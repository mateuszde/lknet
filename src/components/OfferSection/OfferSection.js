import { OfferSectionWrapper, Wrapper, OfferCardsWrapper } from './style';
import Title from '../UI/Title/Title';
import OfferCards from './OfferCards/OfferCards';

const OfferSection = ({ data }) => {
  return (
    <OfferSectionWrapper id="offer">
      <Wrapper>
        <div>
          <Title>NASZA OFERTA</Title>
          <p>
            Jesteśmy dumni z naszych doświadczeń oraz wiedzy, którą zdobyliśmy na przestrzeni wielu
            lat pracy. Nasza oferta jest zróżnicowana i skierowana do klientów z różnych branż i
            sektorów, zapewniając kompleksowe rozwiązania w wielu dziedzinach. Dzięki indywidualnemu
            podejściu do każdego projektu, zawsze dopasowujemy nasze usługi do potrzeb klienta,
            zapewniając satysfakcję i wysoką jakość usług. Zapraszamy do zapoznania się z naszą
            ofertą i skorzystania z naszych usług.
          </p>
        </div>
        <OfferCardsWrapper>
          <OfferCards data={data} />
        </OfferCardsWrapper>
      </Wrapper>
    </OfferSectionWrapper>
  );
};

export default OfferSection;
