import { useState } from 'react';
import { DayStyled } from './Calendar.styled';
import { debounce } from 'helpers/debounce';
import { getHoverPosition } from 'helpers/getHoverPosition';
import { DaysGeneralStats } from './DaysGeneralStats';
import { nanoid } from 'nanoid';
import { useRef } from 'react';

const dateOption = { year: 'numeric', month: 'short', day: 'numeric' };
const water = {
  norma: 1500,
  fulfillment: 0.6,
  count: 5,
};

export const CreateCalendar = ({ year, month, currentDate }) => {
  const [hoveredDay, setHoveredDay] = useState(null);
  const [hover, setHover] = useState({ left: 0, top: 0, with: 0, height: 188 });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysOfMonth = Array(daysInMonth).fill('');

  const onMouseEnter = debounce((e, date) => {
    handleOpen(e.target, date);
  }, 50);

  const handleClose = () => {
    setHoveredDay(null);
  };

  const handleOpen = (target, date) => {
    setHover(getHoverPosition(target));
    setHoveredDay(date);
  };

  const openHover = (e, date) => {
    hoveredDay && hoveredDay.toDateString() === date.toDateString()
      ? handleClose()
      : handleOpen(e.target, date);
  };

  return (
    <>
      <ul>
        {daysOfMonth.map((_, i) => {
          const date = new Date(year, month, i + 1);
          const isNow = currentDate.toDateString() === date.toDateString();
          const isFuture = currentDate < date;
          return (
            <li key={nanoid()} data-active={isNow}>
              {window.innerWidth >= 1440 ? (
                <DayStyled
                  data-day={!isFuture}
                  onMouseEnter={isFuture ? null : e => onMouseEnter(e, date)}
                  onMouseLeave={handleClose}
                >
                  {i + 1}
                </DayStyled>
              ) : (
                <DayStyled
                  data-day
                  disabled={isFuture}
                  onClick={isFuture ? null : e => openHover(e, date)}
                >
                  {i + 1}
                </DayStyled>
              )}
              <p>{isFuture ? '0%' : '100%'}</p>
            </li>
          );
        })}
      </ul>
      {!!hoveredDay && (
        <DaysGeneralStats
          hover={hover}
          date={hoveredDay}
          water={water}
          onClose={handleClose}
        />
      )}
    </>
  );
};
