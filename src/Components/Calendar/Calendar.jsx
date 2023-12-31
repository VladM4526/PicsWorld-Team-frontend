import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { CreateCalendar } from './CreateCalendar';
import {
  BtnArrowCalendarStyled,
  CalendarHeaderStyled,
  CalendarStyled,
} from './Calendar.styled';
import { getMonthName } from 'helpers/getMonthName';
import { fetchStats } from 'redux-files/water/waterOperations';
import svgIcons from 'img/set-icons.svg';

const currentDate = new Date();

export function Calendar() {
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const dispatch = useDispatch();

  const monthName = getMonthName(month);

  useEffect(() => {
    dispatch(fetchStats(`${year}-${month + 1}`));
  }, [dispatch, year, month]);

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
  return (
    <CalendarStyled>
      <CalendarHeaderStyled>
        <h3>Month</h3>
        <div>
          <BtnArrowCalendarStyled onClick={goToPrevMonth}>
            <svg height="14" width="14" data-arrow="right">
              <use href={`${svgIcons}#icon-arrow`}></use>
            </svg>
          </BtnArrowCalendarStyled>
          <p>{`${monthName}, ${year}`}</p>
          <BtnArrowCalendarStyled
            onClick={goToNextMonth}
            disabled={currentDate < new Date(year, month + 1)}
          >
            <svg height="14" width="14" data-arrow="left">
              <use href={`${svgIcons}#icon-arrow`}></use>
            </svg>
          </BtnArrowCalendarStyled>
        </div>
      </CalendarHeaderStyled>
      <CreateCalendar
        year={year}
        month={month}
        monthName={monthName}
        currentDate={currentDate}
      />
    </CalendarStyled>
  );
}
