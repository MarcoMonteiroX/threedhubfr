import P from 'prop-types';
import * as Styled from './styles';

export const Input = ({ name, children }) => {
  return (
    <Styled.Container>
      <span>{name}</span>
      {children}
    </Styled.Container>
  );
};

Input.propTypes = {
  name: P.string,
  children: P.node.isRequired,
};
