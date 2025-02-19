import styled, { css } from 'styled-components';

export const Container = styled.section`
${({ theme }) => css`
  position: relative;
`}
`;

export const ContainerMenu = styled.section`
${({ theme }) => css`
  position: absolute;
  top: 25px;
  right: 25px;
  width: calc(100px + 40px);
  padding: 20px;
  background-color: ${theme.colors.lightGray};
  font-size: ${theme.fonts.sizes.xsamll};
  font-weight: bold;

  border-radius: 20px;

  nav {
    display: flex;
    flex-direction: column;
    gap: 10px;

    a {
      text-decoration: none;
      color: ${theme.colors.black};
    }
  }

`}
`;
