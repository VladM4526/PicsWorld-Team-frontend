import { CalendarHoverStyled } from './Calendar.styled';
import { useEffect } from 'react';
import icons from '../../img/set-icons.svg';
import { useState } from 'react';

export const DaysGeneralStats = ({ hoverPos, dayStats, onClose }) => {
  const [isMobil, setIsMobil] = useState(window.innerWidth < 1440);
  useEffect(() => {
    // change hover dimentions according to screen resolutions
    const onChangeScreen = () => {
      setIsMobil(window.innerWidth < 1440);
    };
    window.addEventListener('resize', onChangeScreen);

    // add handle on click to close hover-window on mobile devices and tablet devices
    const handleBodyClick = e => {
      if (
        !e.target.closest('[data-hover]') &&
        !e.target.closest('[data-day]')
      ) {
        onClose();
      }
    };
    document.body.addEventListener('click', handleBodyClick);

    return () => {
      window.removeEventListener('resize', onChangeScreen);
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [onClose]);

  return (
    <CalendarHoverStyled hover={hoverPos} data-hover>
      <div>
        <h4>{dayStats.dateName}</h4>
        {isMobil && (
          <button type="button" onClick={() => onClose()}>
            <svg width="16" height="16">
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </button>
        )}
      </div>
      <p>
        Daily norma: <span>{dayStats.dailyWaterRate}</span>
      </p>
      <p>
        Fulfillment of the daily norm: <span>{`${dayStats.percentage}%`}</span>
      </p>
      <p>
        How many servings of water: <span>{dayStats.count}</span>
      </p>
    </CalendarHoverStyled>
  );
};
