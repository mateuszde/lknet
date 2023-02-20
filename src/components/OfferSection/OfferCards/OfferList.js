import OfferCard from '../OfferCard/OfferCard';

const OfferList = ({ data }) => {
  return (
    <>
      {data.map((work) => (
        <OfferCard key={work.id} id={work.id} title={work.title} listOfWorks={work.typesOfWork} />
      ))}
    </>
  );
};

export default OfferList;
