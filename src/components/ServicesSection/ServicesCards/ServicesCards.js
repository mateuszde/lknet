import ServicesList from './ServicesList';
import { Wrapper } from './styleServicesCards';

const ServicesCards = ({ data }) => {
  return (
    <Wrapper>
      <ServicesList data={data} />
    </Wrapper>
  );
};

export default ServicesCards;
