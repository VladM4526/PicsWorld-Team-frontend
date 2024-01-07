import { Today } from './Today';
import { DailyTrackerWrapStyled, HomeWrapStyled } from './Home.styled';
import WaterRatioPanel from 'Components/WaterRatioPanel/WaterRatioPanel';
import { ContainerStyled } from 'Components/Home/Container.styled';
import DailyNorma from 'Components/DailyNorma/DailyNorma';
import bottleDesktop from '../../img/bottle_home_desktop@1x-min.png';
import bottleMob from '../../img/bottle_home_mobile@1x-min.png';
import bottleTab from '../../img/bottle_home_tablet@1x-min.png';

export const Home = () => {
  return (
    <ContainerStyled>
      <HomeWrapStyled>
        <DailyTrackerWrapStyled>
          <DailyNorma />
          <picture>
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
          </picture>
          <WaterRatioPanel />
        </DailyTrackerWrapStyled>
        <Today />
      </HomeWrapStyled>
    </ContainerStyled>
  );
};
