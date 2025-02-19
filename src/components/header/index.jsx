import P from 'prop-types';
import * as Styled from './styles';

export const Header = ({ title, descripton }) => {
  return (
    <Styled.Container>
      <h1>{title}</h1>
      <p>{descripton}</p>
    </Styled.Container>
  );
};

Header.propTypes = {
  title: P.string.isRequired,
  descripton: P.string.isRequired,
};
