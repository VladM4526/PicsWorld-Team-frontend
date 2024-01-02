import { Calendar } from 'Components/Calendar/Calendar';
import TodayList from 'Components/TodayList/TodayList';
import { TodayWrapStyled } from './Home.styled';

export const Today = () => {
  return (
    <TodayWrapStyled>
      <TodayList />
      <Calendar />
    </TodayWrapStyled>
  );
};
