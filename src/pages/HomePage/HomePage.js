import HeroSection from '../../components/HeroSection/HeroSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';

import { dataServicesSection } from '../../data/dataServicesSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection data={dataServicesSection} />
      <AboutUsSection />
    </>
  );
};

export default HomePage;
