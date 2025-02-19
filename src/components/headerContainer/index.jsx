import P from 'prop-types';
import * as Styled from './styles';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router';
import { Menu } from '../menu';

export const HeaderContainer = ({
  isMenu,
  handleSelectedComponent,
  menuOpen,
  handleMenu,
  menuRef,
}) => {
  return (
    <Styled.Container>
      <img className="logo" src="assets/Logo.svg" alt="logo do ThreeD-Hub" />
      {isMenu ? (
        <Menu
          menuRef={menuRef}
          handleSelectedComponent={handleSelectedComponent}
          menuOpen={menuOpen}
          handleMenu={handleMenu}
        />
      ) : (
        <Link to="/">
          <IoMdClose size={30} color="#000" />
        </Link>
      )}
    </Styled.Container>
  );
};

HeaderContainer.propTypes = {
  isMenu: P.bool.isRequired,
  handleSelectedComponent: P.func.isRequired,
  menuOpen: P.bool.isRequired,
  handleMenu: P.func.isRequired,
  menuRef: P.shape({ current: P.instanceOf(Element) }),
};
