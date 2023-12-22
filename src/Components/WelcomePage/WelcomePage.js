import { Tracker } from './WelcomePage.styled';
import { TrackerBenefits } from './components/TrackerBenefits/TrackerBenefits';
import { TrackerInfo } from './components/TrackerInfo/TrackerInfo';
import { WelcomeLayout } from './components/WelcomeLayout/WelcomeLayout';

export const WelcomePage = () => {
  return (
    <WelcomeLayout>
      <div>
        <Tracker>
          <TrackerBenefits />
          <TrackerInfo />
        </Tracker>
      </div>
    </WelcomeLayout>
  );
};
