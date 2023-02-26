import {
  Wrapper,
  StyledVideo,
  StyledImg,
  ContentWrapper,
  Overlay,
  UIWrapper,
  ButtonWrapper,
} from './style';
import video from '../../assets/video/videoFiber.mp4';
import Button from '../UI/Button/Button';
import img from '../../assets/images/Gallery/02.jpg';

const HeroSection = ({ secondary, secondaryTitle }) => {
  return (
    <Wrapper secondary={secondary} id="header">
      <Overlay />
      {secondary ? (
        <StyledVideo src={video} autoPlay loop muted playsInline />
      ) : (
        <StyledVideo src={video} autoPlay loop muted playsInline />
      )}

      <ContentWrapper>
        <UIWrapper>
          {secondary ? (
            <h1>{secondaryTitle}</h1>
          ) : (
            <>
              <p>najważniejsze co budujemy, to zaufanie</p>
              <h1>Wykonawca infrastruktury teletechnicznej </h1>
              <p>
                Specjalizujemy się w wykopach liniowych, przeciskach pod drogami, przewiertach
                sterowanych, wdmuchiwaniem kabli oraz spawaniu światłowodów.
              </p>
            </>
          )}
        </UIWrapper>

        {!secondary && (
          <ButtonWrapper>
            <Button link="/#offer">Poznaj ofertę</Button>
          </ButtonWrapper>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;
