import styled, { css } from 'styled-components';

export const Container = styled.section`
${({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacings.xxlarge};

  .logo {
    width: 56px;
    height: 64px;
  }
`}
`;
