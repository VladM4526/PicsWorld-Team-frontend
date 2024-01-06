import { Today } from './Today';
import { DailyTrackerWrapStyled, HomeWrapStyled } from './Home.styled';
import WaterRatioPanel from 'Components/WaterRatioPanel/WaterRatioPanel';
import { ContainerStyled } from 'Components/Layout/Layout.styled';
import DailyNorma from 'Components/DailyNorma/DailyNorma';
import bottleDesktop from '../../img/bottle_desktop_edited.png';
import bottleMob from '../../img/bottle_phone_edited.png';
import bottleTab from '../../img/bottle_tablet_edited.png';

export const BgPicture = () => {
  return <>  </>;
};
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
              <img src={bottleMob} alt="bottle" />
            </picture>
            <div style={{ minWidth: '280px', height: '134px' }}>
            <WaterRatioPanel />
          </div>
          </DailyTrackerWrapStyled>
        
      <Today />
      </HomeWrapStyled>
    </ContainerStyled>
  );
};
