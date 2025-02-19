import P from 'prop-types';
import * as Styled from './styles';
import { useEffect, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HeaderContainer } from '../../components/headerContainer';
import { RequestOrders } from '../../components/requestOrders';
import { MyAccount } from '../../components/myAccount';
import { CreateOrder } from '../../components/createOrder';

export const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState('pedidos');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCreateOrder, setShowCreateOrder] = useState(false); // Novo estado
  const menuRef = useRef(null);

  const handleSelectedComponent = (componente) => {
    setSelectedComponent(componente);
  };

  const handleMenu = (isMounted) => {
    setMenuOpen(!isMounted);
  };

  const handleCreateOrder = () => {
    setShowCreateOrder(true);
  };

  const closeCreateOrder = () => {
    setShowCreateOrder(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Styled.Container>
      <HeaderContainer
        isMenu={true}
        menuRef={menuRef}
        menuOpen={menuOpen}
        handleMenu={handleMenu}
        handleSelectedComponent={handleSelectedComponent}
      />
      {!showCreateOrder ? (
        <>
          {selectedComponent === 'pedidos' && <RequestOrders />}
          {selectedComponent === 'conta' && <MyAccount onClose={() => setSelectedComponent('pedidos')} />}
          {selectedComponent !== 'conta' && (
            <Styled.FloatingButton onClick={handleCreateOrder}>
              <FaPlus size={24} color="#fff" />
            </Styled.FloatingButton>
          )}
        </>
      ) : (
        <CreateOrder onClose={closeCreateOrder} /> // Renderiza o CreateOrder
      )}
    </Styled.Container>
  );
};
Home.propTypes = {
  children: P.node.isRequired,
};
