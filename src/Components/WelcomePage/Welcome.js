import { Header } from './Header/Header';
import { TrackerInfo } from './TrackerInfo';
import { TrackerWelcome } from './TrackerWelcome';
import { WelcomeComtainer } from './WelcomePage.styled';

export const WelcomePage = () => {
  return (
    <>
      <Header />
      <WelcomeComtainer>
        <TrackerWelcome />
        <TrackerInfo />
      </WelcomeComtainer>
    </>
  );
};
