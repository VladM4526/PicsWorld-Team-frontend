// import { useNavigate } from 'react-router-dom';
// import { Button } from '../../../CommonStyle/Button/Button';

import {
  BenefitsList,
  BenefitsItems,
  DescribeText,
  Container,
  CalendarIcon,
  StatisticsIcon,
  SettingsIcon,
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
          <CalendarIcon />
          Habit drive
        </BenefitsItems>
        <BenefitsItems>
          <StatisticsIcon />
          View statistics
        </BenefitsItems>
        <BenefitsItems>
          <SettingsIcon />
          Personal rate setting
        </BenefitsItems>
      </BenefitsList>
    </Container>
  );
};
