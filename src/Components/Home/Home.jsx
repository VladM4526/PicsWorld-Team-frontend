import DailyNorma from 'Components/DailyNorma/DailyNorma';
import { Today } from './Today';
import {
  DailyTrackerWrapStyled,
  DailyWrapStyled,
  HomeWrapStyled,
} from './Home.styled';
import WaterRatioPanel from 'Components/WaterRatioPanel/WaterRatioPanel';

export const Home = () => {
  return (
    <HomeWrapStyled>
      <DailyTrackerWrapStyled>
        <DailyWrapStyled>
          <DailyNorma />
        </DailyWrapStyled>
        
        <div style={{ minWidth: '280px', height: '134px' }}><WaterRatioPanel/></div>
      </DailyTrackerWrapStyled>
      <Today />
    </HomeWrapStyled>
  );
};
