import DailyNorma from 'Components/DailyNorma/DailyNorma';
import { Today } from './Today';
import {
  DailyTrackerWrapStyled,
  DailyWrapStyled,
  HomeWrapStyled,
} from './Home.styled';

export const Home = () => {
  return (
    <HomeWrapStyled>
      <DailyTrackerWrapStyled>
        <DailyWrapStyled>
          <DailyNorma />
        </DailyWrapStyled>
        {/* <DayTracker/> */}
        <div style={{ minWidth: '280px', height: '134px' }}>Daily Tracker</div>
      </DailyTrackerWrapStyled>
      <Today />
    </HomeWrapStyled>
  );
};
