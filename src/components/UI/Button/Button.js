import { Wrapper } from './style';

const Button = ({ children }) => {
  return (
    <Wrapper>
      <span>{children}</span>
    </Wrapper>
  );
};

export default Button;
