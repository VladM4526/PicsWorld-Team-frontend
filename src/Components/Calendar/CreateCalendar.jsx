import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { DaysGeneralStats } from './DaysGeneralStats';
import { DayStyled } from './Calendar.styled';
import { debounce } from 'helpers/debounce';
import { getHoverPosition } from 'helpers/getHoverPosition';
import { useWater } from 'redux-files/hooks/useWater';
import { selectDailyNorma } from 'redux-files/auth/selectors';

export const CreateCalendar = ({ year, month, monthName, currentDate }) => {
  const [hoveredDayStats, setHoveredDayStats] = useState(null);
  const [hoverPos, setHoverPos] = useState({ height: 188 });
  const { stats, percentageToday } = useWater();
  const dailyWaterRate = useSelector(selectDailyNorma);

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
  }, 100);

  // Open stats to click on the Day (for tablet and mobile devices)
  const openHoverOnClick = (e, dayStats) => {
    hoveredDayStats && hoveredDayStats.date === dayStats.date
      ? handleClose()
      : handleOpen(e.target, dayStats);
  };
  // get statistic data for creating calendar and values for hover
  const getDayStats = day => {
    let dayStats = {
      dateName: `${day}, ${monthName}`,
      count: 0,
      dailyWaterRate: dailyWaterRate / 1000 + ' L',
      percentage: 0,
    };

    const dayStatsDraft = stats.find(i => new Date(i.date).getDate() === day);

    if (!dayStatsDraft) {
      return { day, dayStats };
    }
    dayStats = { ...dayStats, ...dayStatsDraft };
    !dayStatsDraft.percentage
      ? (dayStats.percentage = 0)
      : (dayStats.percentage = Math.min(
          parseInt(dayStatsDraft.percentage),
          100
        ));
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
          const isDesktop = window.innerWidth >= 1440;
          return (
            <li key={nanoid()}>
              <DayStyled
                $borderClr={
                  (isNow && percentageToday >= 100) ||
                  (!isNow && dayStats.percentage) >= 100
                    ? 'transparent'
                    : '#ff9d43'
                }
                data-active={isNow}
                data-day={!isFuture}
                disabled={isFuture}
                onMouseEnter={
                  isFuture || !isDesktop ? null : e => onMouseEnter(e, dayStats)
                }
                onMouseLeave={isFuture || !isDesktop ? null : handleClose}
                onClick={
                  isFuture || isDesktop
                    ? null
                    : e => openHoverOnClick(e, dayStats)
                }
              >
                {day}
              </DayStyled>
              {isNow ? (
                <p>{`${percentageToday}%`}</p>
              ) : (
                <p>{isFuture ? '-' : `${dayStats.percentage}%`}</p>
              )}
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
