import styled from 'styled-components';

export const WelcomeComtainer = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 704px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 1014px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 49px;
  }
`;
