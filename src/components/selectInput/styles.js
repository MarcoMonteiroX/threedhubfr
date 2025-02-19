import styled, { css } from 'styled-components';

export const Container = styled.section`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    background: white;
    cursor: pointer;
  }
`}
`;
