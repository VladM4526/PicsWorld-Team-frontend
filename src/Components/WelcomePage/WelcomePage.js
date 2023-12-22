import { Tracker } from './WelcomePage.styled';
import { TrackerBenefits } from './components/TrackerBenefits/TrackerBenefits';
import { TrackerInfo } from './components/TrackerInfo/TrackerInfo';
import { Header } from './components/Header/Header';

export const WelcomePage = () => {
  return (
    <Header>
      <div>
        <Tracker>
          <TrackerBenefits />
          <TrackerInfo />
        </Tracker>
      </div>
    </Header>
  );
};
