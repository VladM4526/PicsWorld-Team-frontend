import { Today } from './Today';
import { DailyTrackerWrapStyled, HomeWrapStyled } from './Home.styled';
import WaterRatioPanel from 'Components/WaterRatioPanel/WaterRatioPanel';
import { ContainerStyled } from 'Components/Home/Container.styled';
import DailyNorma from 'Components/DailyNorma/DailyNorma';
import { BgImg } from './BgImg';

export const Home = () => {
  return (
    <ContainerStyled>
      <HomeWrapStyled>
        <DailyTrackerWrapStyled>
          <DailyNorma />
          <BgImg />
          <WaterRatioPanel />
        </DailyTrackerWrapStyled>
        <Today />
      </HomeWrapStyled>
    </ContainerStyled>
  );
};
