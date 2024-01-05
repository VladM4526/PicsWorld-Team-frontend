import { useRef, useState } from 'react';
import { DayStyled } from './Calendar.styled';
import { debounce } from 'helpers/debounce';
import { getHoverPosition } from 'helpers/getHoverPosition';
import { DaysGeneralStats } from './DaysGeneralStats';
import { nanoid } from 'nanoid';
import { useWater } from 'redux-files/hooks/useWater';

const water = {
  norma: 1500,
  fulfillment: 0.6,
  count: 5,
};

export const CreateCalendar = ({ year, month, currentDate }) => {
  const [hoveredDayStats, setHoveredDayStats] = useState(null);
  const [hoverPos, setHoverPos] = useState({ height: 188 });
  const { stats } = useWater();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysOfMonth = Array(daysInMonth).fill('');

  const parentRef = useRef(null);

  const handleClose = () => {
    setHoveredDayStats(null);
  };

  const handleOpen = (target, dayStats) => {
    const parentRect = parentRef.current.getBoundingClientRect();
    setHoverPos(getHoverPosition(target, parentRect));
    setHoveredDayStats(dayStats);
  };

  // Open stats to point to the Day (for desktop)
  const onMouseEnter = debounce((e, dayStats) => {
    handleOpen(e.target, dayStats);
  }, 50);

  // Open stats to click on the Day (for tablet and mobile devices)
  const openHoverOnClick = (e, dayStats) => {
    hoveredDayStats && hoveredDayStats.date === dayStats.date
      ? handleClose()
      : handleOpen(e.target, dayStats);
  };

  // get statistic data for creating calendar and values for hover
  const getDayStats = day => {
    const dayStats = stats.find(i => new Date(i.date).getDate() === day) || {};
    return { day, dayStats };
  };

  return (
    <div style={{ position: 'relative' }}>
      <ul ref={parentRef}>
        {daysOfMonth.map((_, idx) => {
          const { day, dayStats } = getDayStats(idx + 1);
          const date = new Date(year, month, day);
          const isNow = currentDate.toDateString() === date.toDateString();
          const isFuture = currentDate < date;
          return (
            <li key={nanoid()} data-active={isNow}>
              {window.innerWidth >= 1440 ? (
                <DayStyled
                  data-day={!isFuture}
                  disabled={isFuture}
                  onMouseEnter={
                    isFuture ? null : e => onMouseEnter(e, dayStats)
                  }
                  onMouseLeave={handleClose}
                >
                  {day}
                </DayStyled>
              ) : (
                <DayStyled
                  data-day
                  disabled={isFuture}
                  onClick={isFuture ? null : e => openHoverOnClick(e, dayStats)}
                >
                  {day}
                </DayStyled>
              )}
              <p>{isFuture ? '-' : dayStats.percentage || '0%'}</p>
            </li>
          );
        })}
      </ul>
      {hoveredDayStats && (
        <DaysGeneralStats
          hoverPos={hoverPos}
          onClose={handleClose}
          dayStats={hoveredDayStats}
        />
      )}
    </div>
  );
};
