import { Today } from './Today';
import { DailyTrackerWrapStyled, HomeWrapStyled } from './Home.styled';
import WaterRatioPanel from 'Components/WaterRatioPanel/WaterRatioPanel';
import { ContainerStyled } from 'Components/Layout/Layout.styled';
import DailyNorma from 'Components/DailyNorma/DailyNorma';

export const Home = () => {
  return (
    <ContainerStyled>
      <HomeWrapStyled>
     
        <DailyTrackerWrapStyled>
          <DailyNorma />
          <div style={{ minWidth: '280px', height: '134px' }}>
            <WaterRatioPanel />
          </div>
        </DailyTrackerWrapStyled>
      <Today />
      </HomeWrapStyled>
    </ContainerStyled>
  );
};
