import styled from 'styled-components';

export const Tracker = styled.div`
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 80px;
  }
`;
