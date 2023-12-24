// import { useNavigate } from 'react-router-dom';
// import { Button } from '../../../CommonStyle/Button/Button';

import {
  BenefitsList,
  BenefitsItems,
  Descr,
  Container,
  CalendarIcon,
  StatisticsIcon,
  SettingsIcon,
} from './TrackerBenefits.styled';
import { MainTitle, SubTitle } from '../../../CommonStyle/Title/Title.styled';
import WaterTracker from '../../WelcomePage/img/set-icons.svg';

export const TrackerBenefits = () => {
  // const navigate = useNavigate();
  // function TryClick() {
  //   navigate('/signup');
  // }
  return (
    <Container>
      <MainTitle>Water consumption tracker</MainTitle>
      <Descr>Record daily water intake and track</Descr>
      {/* DescribeText */}
      <SubTitle>Tracker Benefits</SubTitle>
      <BenefitsList>
        <BenefitsItems>
          <svg />
          Habit drive
        </BenefitsItems>
        <BenefitsItems>
          <svg />
          View statistics
        </BenefitsItems>
        <BenefitsItems>
          <svg />
          Personal rate setting
        </BenefitsItems>
      </BenefitsList>

      {/* <Button type="button" onClick={TryClick}>
        Try tracker
      </Button> */}
    </Container>
  );
};
