import { Tracker } from './WelcomePage.styled';
import { TrackerBenefits } from './TrackerBenefits/TrackerBenefits';
import { TrackerInfo } from './TrackerInfo/TrackerInfo';
import { Header } from './Header/Header';

export const WelcomePage = () => {
  return (
    <>
      <Header />
      <Tracker>
        <TrackerBenefits />
        <TrackerInfo />
      </Tracker>
    </>
  );
};
