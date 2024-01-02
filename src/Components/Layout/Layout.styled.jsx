import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 0 20px 40px 20px;

  @media only screen and (min-width: 768px) {
    padding: 0 32px 44px 32px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 0 112px 40px 122px;
  }
`;
/* background-image: url(${image}); */
/* background-size: cover; */
