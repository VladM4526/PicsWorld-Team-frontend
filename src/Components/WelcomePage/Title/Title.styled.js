import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-size: 36px;
  line-height: calc(42 / 36);
  font-weight: 700;
  color: #2f2f2f;

  margin-bottom: 16px;
  margin-top: 16px;

  @media only screen and (max-width: 767px) {
    font-size: 28px;
    line-height: calc(32 / 28);
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  line-height: calc(32 / 26);
  font-weight: 500;
  color: #2f2f2f;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const TitleMedium = styled.h2`
  font-size: 18px;
  line-height: calc(20 / 18);
  font-weight: 500;
  color: #2f2f2f;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: calc(20 / 18);

  margin-bottom: 12px;
`;
