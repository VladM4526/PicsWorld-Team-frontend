import {
  BenefitsItemsList,
  BenefitsItems,
  DescribeText,
  Container,
  SetIcons,
  DescribeTextItem,
  MainTitle,
  SubTitleBenefits,
  ButtonTry,
} from '../MainStyles.styled';
import WaterTracker from '../../WelcomePage/img/set-icons.svg';

export const TrackerBenefits = () => {
  return (
    <Container>
      <MainTitle>Water consumption tracker</MainTitle>
      <DescribeText>Record daily water intake and track</DescribeText>
      <SubTitleBenefits>Tracker Benefits</SubTitleBenefits>
      <BenefitsItemsList>
        <BenefitsItems>
          <SetIcons>
            <use href={`${WaterTracker}#icon-calendar`}></use>
          </SetIcons>
          <DescribeTextItem>Habit drive</DescribeTextItem>
        </BenefitsItems>
        <BenefitsItems>
          <SetIcons>
            <use href={`${WaterTracker}#icon-presentation-chart`}></use>
          </SetIcons>
          <DescribeTextItem>View statistics</DescribeTextItem>
        </BenefitsItems>
        <BenefitsItems>
          <SetIcons>
            <use href={`${WaterTracker}#icon-setting-welcome-page`}></use>
          </SetIcons>
          <DescribeTextItem>Personal rate setting</DescribeTextItem>
        </BenefitsItems>
      </BenefitsItemsList>
      <ButtonTry type="button">Try tracker</ButtonTry>
    </Container>
  );
};
