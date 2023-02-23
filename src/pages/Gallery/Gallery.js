import { GalleryContainer, StyledImage, Wrapper } from './style';
import HeroSection from '../../components/HeroSection/HeroSection';

import galleryImages from '../../data/dataGalleryImages';

const Gallery = () => {
  return (
    <>
      <HeroSection secondary secondaryTitle="Galeria" />
      <Wrapper>
        <p>
          Zapraszamy do naszej galerii, gdzie prezentujemy zdjęcia z wykonanych przez nas prac z
          zakresu prac ziemnych, spawania światłowodów oraz przewiertów sterowanych. Chcemy
          podzielić się z Państwem efektami naszej pracy, aby pokazać jak wiele możemy zrobić dla
          naszych Klientów. Zapraszamy do zapoznania się z naszą galerią i zobaczenia, co potrafimy!
        </p>

        <GalleryContainer>
          {galleryImages.map((photo, index) => (
            <StyledImage key={index} src={photo.img} alt="" />
          ))}
        </GalleryContainer>
      </Wrapper>
    </>
  );
};

export default Gallery;
