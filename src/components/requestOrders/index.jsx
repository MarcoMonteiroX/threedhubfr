import { useEffect, useState } from 'react';
import api from '../../services/api';
import { OrderCard } from '../orderCard';
import * as Styled from './styles';

export const RequestOrders = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await api.get('/pedidos/meus-pedidos'); // Use a nova rota
        setPedidos(response.data);
      } catch (error) {
        console.error('Erro ao buscar pedidos do usuário logado:', error);
      }
    };

    fetchPedidos();
  }, []);

  const handleClickPedido = (pedidoId) => {
    console.log(`Pedido clicado: ${pedidoId}`);
  };

  return (
    <Styled.GridContainer>
      {pedidos.length > 0 ? (
        pedidos.map((pedido) => (
          <OrderCard
            key={pedido.id}
            nome={pedido.nome}
            dataSolicitacao={pedido.dataSolicitacao}
            status={pedido.status}
            onClick={() => handleClickPedido(pedido.id)}
          />
        ))
      ) : (
        <p>Você não possui pedidos.</p>
      )}
    </Styled.GridContainer>
  );
};
