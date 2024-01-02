import { Tracker } from './WelcomePage.styled';
import { TrackerBenefits } from './TrackerBenefits/TrackerBenefits';
import { TrackerInfo } from './TrackerInfo/TrackerInfo';
import { Header } from './Header/Header';
import { Home } from 'Components/Home/Home';

//  для розробки
// import { Modal } from 'Components/Modal-window/Modal';
// import { Calendar } from 'Components/Calendar/Calendar';
//import TodayList from 'Components/TodayList/TodayList';

export const Welcome = () => {
  return (
    <>
      {/* <Header /> */}
      <Tracker>
        <TrackerBenefits />
        <TrackerInfo />
      </Tracker>
      {/* для розробки  */}
      {/* <Modal /> */}
      {/* <Calendar /> */}
      <Home />
    </>
  );
};
