import ServiceCard from '../ServiceCard/ServiceCard';

const ServicesList = ({ data }) => {
  return (
    <>
      {data.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          text={service.text}
          image={service.image}
        />
      ))}
    </>
  );
};

export default ServicesList;
