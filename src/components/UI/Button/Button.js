import { Wrapper, StyledNavHashlink } from './style';

const Button = ({ children, link }) => {
  return (
    <Wrapper>
      {link && <StyledNavHashlink to={link}>{children}</StyledNavHashlink>}
      {!link && <span>{children}</span>}
    </Wrapper>
  );
};

export default Button;
