import {
  ContacSectionWrapper,
  ColumnWrapper,
  CompanyDetailsWrapper,
  IconWrapper,
  StyledIcon,
  PhoneWrapper,
} from './style';
import Title from '../../UI/Title/Title';

const ContactSection = ({ dataContact }) => {
  return (
    <ContacSectionWrapper>
      <ColumnWrapper>
        <Title small secondary>
          DANE REJESTROWE
        </Title>
        <div>
          <p>{dataContact.company.name}</p>
          <p>{dataContact.company.address.street}</p>
          <p>
            {dataContact.company.address.postCode} {dataContact.company.address.city}
          </p>
          <CompanyDetailsWrapper>
            <p>NIP: {dataContact.company.NIP}</p>
            <p>REGON: {dataContact.company.REGON}</p>
            <p>KRS: {dataContact.company.REGON}</p>
          </CompanyDetailsWrapper>
        </div>
      </ColumnWrapper>

      <ColumnWrapper>
        <Title small secondary>
          DANE KONTAKTOWE
        </Title>
        <div>
          <div>
            {dataContact.mobilePhones.map((mobile) => (
              <PhoneWrapper key={mobile.id}>
                <IconWrapper>
                  <StyledIcon icon="fa-solid fa-phone" />
                </IconWrapper>
                <p>{mobile.number}</p>
              </PhoneWrapper>
            ))}
          </div>
          <div>
            {dataContact.eMails.map((mailContact) => (
              <PhoneWrapper key={mailContact.id}>
                <IconWrapper>
                  <StyledIcon icon="fa-solid fa-envelope" />
                </IconWrapper>
                <p>{mailContact.email}</p>
              </PhoneWrapper>
            ))}
          </div>
        </div>
      </ColumnWrapper>
    </ContacSectionWrapper>
  );
};

export default ContactSection;
