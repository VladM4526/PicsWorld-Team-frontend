import { Header } from './Header/Header';
import { TrackerInfo } from './TrackerInfo';
import { TrackerWelcome } from './TrackerWelcome';
import { Container, WelcomeContainer } from './WelcomePage.styled';

export const WelcomePage = () => {
  return (
    <Container>
      <Header />
      <WelcomeContainer>
        <TrackerWelcome />
        <TrackerInfo />
      </WelcomeContainer>
    </Container>
  );
};
