import {
  SetIcons,
  DescribeTextItem,
  DescribeItem,
  ButtonTry,
  Title,
  DescribeText,
  BenefitsItemsList,
  BenefitsItems,
  TitleContainer,
  TrackerContainer,
  Container,
} from './TrackerStyles.styled';
import WaterTracker from '../../img/set-icons.svg';

export const TrackerWelcome = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Water consumption tracker</Title>
        <DescribeText>Record daily water intake and track</DescribeText>
      </TitleContainer>
      <TrackerContainer>
        <DescribeTextItem>Tracker Benefits</DescribeTextItem>
        <BenefitsItemsList>
          <BenefitsItems>
            <SetIcons>
              <use href={`${WaterTracker}#icon-calendar`}></use>
            </SetIcons>
            <DescribeItem>Habit drive</DescribeItem>
          </BenefitsItems>
          <BenefitsItems>
            <SetIcons>
              <use href={`${WaterTracker}#icon-presentation-chart`}></use>
            </SetIcons>
            <DescribeItem>View statistics</DescribeItem>
          </BenefitsItems>
          <BenefitsItems>
            <SetIcons>
              <use href={`${WaterTracker}#icon-setting-welcome-page`}></use>
            </SetIcons>
            <DescribeItem>Personal rate setting</DescribeItem>
          </BenefitsItems>
        </BenefitsItemsList>
      </TrackerContainer>

      <ButtonTry to="/FormReg">Try tracker</ButtonTry>
    </Container>
  );
};
