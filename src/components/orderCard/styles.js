import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.whiteSecundary};
    border-radius: 16px;
    padding: 16px;
    margin: 8px;
    width: calc(25% - 16px); /* Ocupa 25% da largura da tela menos a margem */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-4px);
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 4px;

      h2 {
        font-size: ${theme.fonts.sizes.small};
        color: ${theme.colors.black};
      }

      p {
        font-size: ${theme.fonts.sizes.xsmall};
        color: ${theme.colors.gray};
      }
    }
  `}
`;

export const StatusBadge = styled.div`
  ${({ theme, status }) => css`
    background: ${status === 'Analise'
      ? theme.colors.yellow
      : status === 'Producao'
        ? theme.colors.blue
        : status === 'Entregue'
          ? theme.colors.green
          : status === 'Negado'
            ? theme.colors.red
            : theme.colors.gray
    };
    color: ${theme.colors.white};
    padding: 8px 16px;
    border-radius: 16px;
    font-size: ${theme.fonts.sizes.xsmall};
    font-weight: bold;
    text-align: center;
    margin-top: 16px;
  `}
`;
