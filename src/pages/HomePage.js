import { Home } from 'Components/Home/Home';
import { Menu } from './Menu/Menu';
// import { UserSettingModal } from 'Components/UserSettingModal/UserSettingModal';

export const HomePage = () => {
  return (
    <>
      <Menu />
      <Home />
      {/* <UserSettingModal /> */}
    </>
  );
};
