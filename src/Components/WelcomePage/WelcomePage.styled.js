import styled from 'styled-components';
import bgDesktop from '../../img/background_main_desktop@1x-min.png'
import bgDesktopBubbles from '../../img/background_desktop@1x-min.png'
import bgTab from '../../img/background_main_tablet@1x-min.png'
import bgMob from '../../img/background_main_mobile@1x-min.png'

export const WelcomeContainer = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 704px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 1014px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 49px;
  }
`;

export const Container = styled.div`
 
  width: 100%;
  height: 100vh;
  background-image: url(${bgMob});
  background-size: cover;
  background-position: center;
  background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${bgTab});
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${bgDesktop}), url(${bgDesktopBubbles});
  }

`;
