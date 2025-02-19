import styled, { css } from 'styled-components';

export const Container = styled.section`
${({ theme }) => css``}
`;

export const Title = styled.section`
${({ theme }) => css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: ${theme.fonts.sizes.medium};
    flex-grow: 1;
    text-align: center;
  }

  svg {
    position: absolute;
    right: 0;
  }
`}
`;

export const NoOrdes = styled.section`
${({ theme }) => css`
  text-align: center;
  margin-top: 96px;

  span {
    display: block;
    margin-top: ${theme.spacings.medium};
    font-size: ${theme.fonts.sizes.xsamll};
    font-weight: 500;
  }
`}
`;

export const NewOrder = styled.section`
${({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 44px;
  right: 39px;
  width: 56px;
  height: 56px;
  background-color: ${theme.colors.green.dark};
  border-radius: 50%;
`}
`;
export const GridContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-between;
    padding: 16px;
  `}
  `;