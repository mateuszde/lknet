import Title from '../../UI/Title/Title';
import {
  Wrapper,
  StyledImage,
  TitleSectionContainer,
  TitleContainer,
  Overlay,
  TextContainer,
} from './style';

const ServiceCard = ({ id, image, text, title }) => {
  return (
    <Wrapper>
      <TitleSectionContainer>
        <StyledImage src={image} alt={title} />
        <Overlay />
        <TitleContainer>
          <Title small secondary>
            {title}
          </Title>
        </TitleContainer>
      </TitleSectionContainer>
      <TextContainer>
        <p>{text}</p>
      </TextContainer>
    </Wrapper>
  );
};

export default ServiceCard;
