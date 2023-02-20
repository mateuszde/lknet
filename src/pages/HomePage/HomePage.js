import HeroSection from '../../components/HeroSection/HeroSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';

import { dataServicesSection } from '../../data/dataServicesSection';
import { dataOffersSection } from '../../data/dataOfferSection';
import OfferSection from '../../components/OfferSection/OfferSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection data={dataServicesSection} />
      <AboutUsSection />
      <OfferSection data={dataOffersSection} />
    </>
  );
};

export default HomePage;
