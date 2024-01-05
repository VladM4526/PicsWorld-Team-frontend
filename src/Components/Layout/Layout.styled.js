import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding: 8px 20px 40px;

  @media only screen and (min-width: 768px) {
    padding: 16px 32px 44px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 12px 112px 40px;
  }
`;