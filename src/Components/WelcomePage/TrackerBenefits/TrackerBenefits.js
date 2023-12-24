// import { useNavigate } from 'react-router-dom';
// import { Button } from '../../../CommonStyle/Button/Button';

import {
  BenefitsList,
  BenefitsItems,
  DescribeText,
  Container,
} from './TrackerBenefits.styled';
import { MainTitle, SubTitle } from '../Title/Title.styled';
import WaterTracker from '../../WelcomePage/img/set-icons.svg';

export const TrackerBenefits = () => {
  return (
    <Container>
      <MainTitle>Water consumption tracker</MainTitle>
      <DescribeText>Record daily water intake and track</DescribeText>
      <SubTitle>Tracker Benefits</SubTitle>
      <BenefitsList>
        <BenefitsItems>
          <svg>
            <use href={`${WaterTracker}#icon-calendar`}></use>
          </svg>
          Habit drive
        </BenefitsItems>
        <BenefitsItems>
          <svg>
            <use href={`${WaterTracker}#icon-calendar`}></use>
          </svg>
          View statistics
        </BenefitsItems>
        <BenefitsItems>
          <svg>
            <use href={`${WaterTracker}#icon-calendar`}></use>
          </svg>
          Personal rate setting
        </BenefitsItems>
      </BenefitsList>
    </Container>
  );
};
