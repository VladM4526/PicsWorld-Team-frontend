import styled from 'styled-components';
import bgDesktop from '../../img/background_desktop@1x-min.png';
import bgMob from '../../img/background_home_mobile@1x-min.png';
import bgTab from '../../img/background_home_mobile@1x-min.png';

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding: 8px 20px 40px;
  background-size: 100%;
  background-repeat: no-repeat;

  background-image: image-set(
    url(${bgMob}) 1x,
    url(${bgMob}) 2x
  );

  @media screen and (min-width: 768px) {
    background-image: image-set(
      url(${bgTab}) 1x,
      url(${bgTab}) 2x
    );
    padding: 16px 32px 44px;
  }

  @media screen and (min-width: 1440px) {
    background-image: image-set(
      url(${bgDesktop}) 1x,
      url(${bgDesktop}) 2x
    ); 
    padding: 12px 112px 40px;
  }

`;