import { StyledTitleH2, StyledTitleH3 } from './style';
const Title = ({ children, small, secondary }) => {
  return (
    <>
      {small ? (
        <StyledTitleH3 secondary={secondary}>{children}</StyledTitleH3>
      ) : (
        <StyledTitleH2 secondary={secondary}>{children}</StyledTitleH2>
      )}
    </>
  );
};

export default Title;
