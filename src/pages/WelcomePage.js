import { Tracker } from '../Components/WelcomePage/WelcomePage.styled';
import { TrackerBenefits } from '../Components/WelcomePage/TrackerBenefits/TrackerBenefits';
import { TrackerInfo } from '../Components/WelcomePage/TrackerInfo/TrackerInfo';
import { Header } from '../Components/WelcomePage/Header/Header';

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
