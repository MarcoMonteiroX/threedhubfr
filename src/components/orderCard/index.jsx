import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

export const OrderCard = ({ nome, dataSolicitacao, status, onClick }) => {
    const dataFormatada = new Date(dataSolicitacao).toLocaleDateString('pt-BR');
    
    return (
        <Styled.Container onClick={onClick}>
            <div className="info">
                <h2>{nome}</h2>
                <p>Solicitado em {dataFormatada}</p>
            </div>
            <Styled.StatusBadge status={status}>
                <span>{status}</span>
            </Styled.StatusBadge>
        </Styled.Container>
    );
};

OrderCard.propTypes = {
    nome: PropTypes.string.isRequired,
    dataSolicitacao: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['Analise', 'Producao', 'Entregue', 'Negado', 'Cancelado']).isRequired,
    onClick: PropTypes.func,
};
