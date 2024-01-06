import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 280px;
  margin: 20px auto;

  @media screen and (min-width: 768px) {
    width: 704px;
    margin: 0px;
  }

  @media screen and (min-width: 1440px) {
    width: 439px;
    margin: 0px;
  }
`;

export const TitleContainer = styled.div`
  width: 246px;

  @media screen and (min-width: 768px) {
    width: 439px;
  }

  @media screen and (min-width: 1440px) {
    width: 439px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    font-weight: 700;
    line-height: 1.16;
  }
`;

export const TrackerContainer = styled.div`
  width: 216px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 248px;
  }
`;

export const BenefitsItemsList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BenefitsItems = styled.li`
  display: flex;
  align-items: center;
  margin-top: 16px;

  &:first-child {
    margin-top: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 224px;
    margin-top: 12px;
    margin-left: 16px;

    &:first-child {
      margin-left: 0px;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0px;
  }
`;

export const DescribeText = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.25;
  margin-top: 16px;
`;

export const DescribeTextItem = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
`;

export const DescribeItem = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  margin-left: 8px;
`;

export const SubTitleBenefits = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 24px;
`;

export const SetIcons = styled.svg`
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const ButtonTry = styled(NavLink)`
  border-radius: 10px;
  background: #407bff;
  padding: 8px 30px;
  margin-top: 24px;
  display: block;
  width: 280px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    width: 366px;
    padding: 10px 30px;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;
