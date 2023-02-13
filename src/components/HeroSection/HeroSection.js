import { Wrapper, StyledVideo, ContentWrapper, Overlay, UIWrapper, ButtonWrapper } from './style';
import video from '../../assets/video/videoFiber.mp4';
import Button from '../UI/Button/Button';

const HeroSection = () => {
  return (
    <Wrapper>
      <Overlay />
      <StyledVideo src={video} autoPlay loop muted />
      <ContentWrapper>
        <UIWrapper>
          <p>najważniejsze co budujemy, to zaufanie.</p>
          <h1>Wykonawca infrastruktury teletechnicznej</h1>
          <p>
            Specjalizujemy się w wykopach liniowych, przeciskach pod drogami, przewiertach
            sterowanych, wdmuchiwaniem kabli oraz spawaniu światłowodów.
          </p>
        </UIWrapper>
        <ButtonWrapper>
          <Button>Poznaj ofertę</Button>
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;
