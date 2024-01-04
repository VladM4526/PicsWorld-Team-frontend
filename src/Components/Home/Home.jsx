import { Today } from './Today';
import { DailyTrackerWrapStyled, HomeWrapStyled } from './Home.styled';
import WaterRatioPanel from 'Components/WaterRatioPanel/WaterRatioPanel';

export const Home = () => {
  return (
    <HomeWrapStyled>
      <DailyTrackerWrapStyled>
        <div style={{ minWidth: '280px', height: '134px' }}>
          <WaterRatioPanel />
        </div>
      </DailyTrackerWrapStyled>
      <Today />
    </HomeWrapStyled>
  );
};
