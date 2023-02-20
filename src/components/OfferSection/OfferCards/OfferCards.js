import { Wrapper } from './styleOfferCards';
import OfferList from './OfferList';

const OfferCards = ({ data }) => {
  return (
    <Wrapper>
      <OfferList data={data} />
    </Wrapper>
  );
};

export default OfferCards;
