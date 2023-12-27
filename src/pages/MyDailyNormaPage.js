import DailyNorma from 'Components/DailyNorma/DailyNorma';
import DailyNormaModal from 'Components/DailyNormaModal/DailyNormaModal';
import { Header } from 'Components/WelcomePage/Header/Header';

export const MyDailyNormaPage = () => {
  return (
    <>
      <Header />
      <DailyNormaModal />
      <DailyNorma />
    </>
  );
};
