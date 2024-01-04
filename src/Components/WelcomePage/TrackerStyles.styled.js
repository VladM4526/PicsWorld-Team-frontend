import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 280px;
  margin: auto;
`;

export const TitleContainer = styled.div`
  width: 246px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;
`;

export const TrackerContainer = styled.div`
  width: 216px;
  margin-top: 24px;
`;

export const BenefitsItemsList = styled.ul``;

export const BenefitsItems = styled.li`
  display: flex;
  align-items: center;
  margin-top: 16px;

  &:first-child {
    margin-top: 12px;
  }

  @media screen and (min-width: 767px) {
    display: flex;
    width: 224px;
  }

  @media screen and (min-width: 1440px) {
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
`;
