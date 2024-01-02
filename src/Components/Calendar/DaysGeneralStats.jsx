import { getMonthName } from 'helpers/getMonthName';
import { CalendarHoverStyled } from './Calendar.styled';
import { useEffect } from 'react';
import icons from '../../img/set-icons.svg';
import { useState } from 'react';

export const DaysGeneralStats = ({ hover, date, water, onClose }) => {
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
    <CalendarHoverStyled hover={hover} data-hover>
      <div>
        <h4>{`${date.getDate()}, ${getMonthName(date.getMonth())}`}</h4>
        {isMobil && (
          <button type="button" onClick={() => onClose()}>
            <svg width="16" height="16">
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </button>
        )}
      </div>
      <p>
        Daily norma: <span>{water.norma / 1000} L</span>
      </p>
      <p>
        Fulfillment of the daily norm: <span>{water.fulfillment * 100} %</span>
      </p>
      <p>
        How many servings of water: <span>{water.count}</span>
      </p>
    </CalendarHoverStyled>
  );
};
