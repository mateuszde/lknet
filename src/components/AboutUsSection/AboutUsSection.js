import {
  AboutUsSectionWrapper,
  Wrapper,
  StyledParagraph,
  ColumnWrapper,
  StyledImage,
  StyledColumnWrapper,
  Overlay,
} from './style';
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import image from '../../assets/images/AboutUsPhoto.jpg';

const AboutUsSection = () => {
  return (
    <AboutUsSectionWrapper>
      <Wrapper>
        <StyledColumnWrapper>
          <StyledImage src={image} />
          {/* <Overlay /> */}
        </StyledColumnWrapper>
        <ColumnWrapper>
          <Title>O NAS</Title>
          <div>
            <StyledParagraph>
              Witaj w LK-net, liderze w dostarczaniu rozwiązań w branży telekomunikacyjnej. Na rynku
              funkcjonujemy od 11 lat, wcześniej działając jako jednoosobowa działalność
              gospodarcza.
            </StyledParagraph>
            <p>
              Nasz zespół zajmuje się budową lnii światłowodowych już ponad 4 lata i był
              niezastąpiony w instalacji infrastruktury w całym kraju. Nasze zaawansowane techniki i
              najnowsze wyposażenie pozwala nam na wydajne i skuteczne kończenie projektów przy
              minimalnym nakładzie czasu pracy.
            </p>
            <p>
              Jeśli potrzebujesz niezawodnych, profesjonalnych rozwiązań, nie szukaj dalej niż
              LK-net. Dzięki wieloletniemu doświadczeniu, jesteśmy wybieranym partnerem dla firm.
              Skontaktuj się z nami dziś, aby dowiedzieć się więcej o naszych usługach i jak możemy
              Ci pomóc w Twoim następnym projekcie.
            </p>
          </div>
          <Button>Kontakt do nas</Button>
        </ColumnWrapper>
      </Wrapper>
    </AboutUsSectionWrapper>
  );
};

export default AboutUsSection;
