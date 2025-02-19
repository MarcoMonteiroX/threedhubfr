import styled, { css } from 'styled-components';

export const Button = styled.div`
${({ theme }) => css`
  width: 100%;

  button {
    width: 100%;
    padding: 12px 16px;
    border: none;
    border-radius: 16px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.small};
  }

  a {
    display: block;
    text-decoration: none;
    text-align: center;
    font-size: ${theme.fonts.sizes.small};
    width: 100%;
    padding: 12px 16px;
    border: none;
    border-radius: 16px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`}
`;
