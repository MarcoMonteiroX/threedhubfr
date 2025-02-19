import styled, { css } from 'styled-components';

export const Container = styled.section`
${({ theme }) => css`
  h1 {
    font-size: ${theme.fonts.sizes.medium};
  }

  p {
    margin-top: ${theme.spacings.small};
    font-size: ${theme.fonts.sizes.xsamll};
  }
`}
`;
