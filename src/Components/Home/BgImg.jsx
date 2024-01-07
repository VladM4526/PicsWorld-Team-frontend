import styled from 'styled-components';
import bottleDesktop from '../../img/bottle_home_desktop@1x-min.png';
import bottleMob from '../../img/bottle_home_mobile@1x-min.png';
import bottleTab from '../../img/bottle_home_tablet@1x-min.png';

const PictureStyled = styled.picture`
  display: block;
  /* position: absolute; */
  /* bottom: 16px; */
  /* top: 82px; */
  img {
    width: 280px;
    height: auto;
  }

  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    img {
      width: 516px;
    }
  }

  @media only screen and (min-width: 1440px) {
    img {
      width: 738px;
    }
  }
`;

export const BgImg = () => (
  <PictureStyled>
    <source
      media="(min-width: 1440px)"
      srcSet={`${bottleDesktop} 1x, ${bottleDesktop} 2x`}
      type="image/png"
    />
    <source
      media="(min-width: 768px)"
      srcSet={`${bottleTab} 1x, ${bottleTab} 2x`}
      type="image/png"
    />
    <source
      media="(max-width: 767px)"
      srcSet={`${bottleMob} 1x, ${bottleMob} 2x`}
      type="image/png"
    />
    <img src={bottleDesktop} alt="bottle" />
  </PictureStyled>
);
