import { useState } from 'react';
import svgIcons from 'img/set-icons.svg';

import { getMonthName } from 'helpers/getMonthName';
import { CreateCalendar } from './CreateCalendar';
import { CalendarHeaderStyled, Div } from './Calendar.styled';

const currentDate = new Date();

export function MyApp() {
  //   const [value, setValue] = useState();
  //   const [date, setDate] = useState(currentDate.getDate());
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  const goToPrevMonth = () => {
    if (month === 0) {
      setYear(prevYear => prevYear - 1);
      setMonth(11);
    } else {
      setMonth(prevMonth => prevMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (month === 11) {
      setYear(prevYear => prevYear + 1);
      setMonth(0);
    } else {
      setMonth(prevMonth => prevMonth + 1);
    }
  };
  console.log('month', month);
  return (
    <Div>
      <CalendarHeaderStyled>
        <h3>Month</h3>
        <div>
          <button onClick={goToPrevMonth}>
            <svg height="14" width="14" data-arrow="right">
              <use href={`${svgIcons}#icon-arrow`}></use>
            </svg>
          </button>
          <p>{`${getMonthName(month)}, ${year}`}</p>
          <button onClick={goToNextMonth}>
            <svg height="14" width="14" data-arrow="left">
              <use href={`${svgIcons}#icon-arrow`}></use>
            </svg>
          </button>
        </div>
      </CalendarHeaderStyled>
      <CreateCalendar year={year} month={month} currentDate={currentDate} />
    </Div>
  );
}
