import Title from '../../UI/Title/Title';
import { Wrapper, ListWrapper, StyledList, LIstItem, ListSquare } from './style.js';

const OfferCard = ({ id, title, listOfWorks }) => {
  return (
    <Wrapper>
      <Title small>{title}</Title>

      <ListWrapper>
        <StyledList>
          {listOfWorks.map((workItem) => (
            <LIstItem key={workItem.id}>
              <ListSquare />
              <p>{workItem.nameOfWork}</p>
            </LIstItem>
          ))}
        </StyledList>
      </ListWrapper>
    </Wrapper>
  );
};

export default OfferCard;
