import styled from 'styled-components';

export const BenefitsItemsList = styled.ul`
  margin-top: 12px;
`;

export const BenefitsItems = styled.li`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: flex;
    width: 224px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const DescribeText = styled.p`
  font-size: 24px;
  line-height: 1.2;
  color: #2f2f2f;
  margin-top: 16px;
`;

export const DescribeTextItem = styled.p`
  margin-left: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  line-height: 1.1;
  font-weight: 700;
  color: #2f2f2f;

  @media only screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 1.1;
    font-weight: 700;
  }
`;

export const SubTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`;

export const SubTitleBenefits = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 24px;
`;

export const Container = styled.div`
  max-width: 280px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media only screen and (min-width: 768px) {
    max-width: 704px;
    font-size: 26px;
    padding-left: 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 439px;
    margin: 0;
  }
`;

export const SetIcons = styled.svg`
  width: 40px;
  height: 40px;
`;

export const TrackerInfoContainer = styled.div`
  max-width: 280px;
  background-color: #ecf2ff;
  padding: 24px 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    padding: 32px 24px;
    max-width: 494px;
    margin-left: 32px;
    margin-right: 242px;
  }
  @media screen and (min-width: 769px) and (min-width: 1440px) {
    margin-top: 34px;
    margin-right: 0px;
  }
`;

export const InfoList = styled.ul`
  margin-top: 12px;
`;
export const InfoItems = styled.li`
  display: flex;
  align-items: center;

  margin-top: 12px;

  &::before {
    content: '';
    border-color: #407bff;
    border-style: solid;
    border-width: 8px;
    border-radius: 50%;
  }

  &:first-child {
    margin-top: 0px;
  }
`;

export const InfoDescribeItems = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  margin-left: 8px;
`;

export const ButtonTry = styled.button`
  border: none;
  border-radius: 10px;
  outline: none;
  background: #407bff;
  width: 280px;
  padding: 8px 30px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  color: #fff;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;
