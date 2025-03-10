import styled, { css } from 'styled-components';

export const Container = styled.section`
${({ theme }) => css``}
`;

export const Form = styled.form`
${({ theme }) => css`
  margin-top: ${theme.spacings.large};
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  img {
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 81px;
  };
  Button {
    margin-top: 12px;
  }
`}
`;
