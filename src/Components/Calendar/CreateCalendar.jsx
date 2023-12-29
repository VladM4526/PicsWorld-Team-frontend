import { useEffect, useRef, useState } from 'react';
import { CalendarHover } from './CalendarHover';
import { DayStyled } from './Calendar.styled';
import { debounce } from 'helpers/debounce';

export const CreateCalendar = ({ year, month, currentDate }) => {
  const [hoveredDay, setHoveredDay] = useState(null);
  const [ulSize, setUlSize] = useState({});
  const [pos, setPos] = useState({ top: 0, left: 0 });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysOfMonth = Array(daysInMonth).fill('');

  const ulRef = useRef(null);

  useEffect(() => {
    setUlSize({ w: ulRef.current.offsetWidth, h: ulRef.current.offsetHeight });
  }, [ulRef]);

  const onMouseEnter = debounce((e, day) => {
    const hoverSize = { w: 280, h: 188 };

    const top = e.clientY;
    // clientY + hoverSize.h > ulSize.h ? clientY - hoverSize.h : clientY;
    const left = e.clientX;
    // clientX + hoverSize.w < ulSize.w ? clientX : ulSize.w - hoverSize.w;
    setPos({ top, left });
    console.log('e', e.target.getBoundingClientRect());
    console.log('ec', e.currentTarget.getBoundingClientRect());

    setHoveredDay(day);
  }, 300);

  const onMouseLeave = () => {
    setHoveredDay(null);
  };
  // console.log('pos', pos);
  return (
    <ul ref={ulRef}>
      {daysOfMonth.map((_, i) => {
        const day = i + 1;
        const date = `${year}-${month + 1}-${day}`;
        const isNow =
          currentDate.toDateString() === new Date(date).toDateString();
        return (
          <li key={date} data-active={isNow}>
            <DayStyled
              onMouseEnter={e => onMouseEnter(e, day)}
              onMouseLeave={onMouseLeave}
            >
              <p>{day}</p>
            </DayStyled>
            <p>{'100%'}</p>
            {hoveredDay && <CalendarHover day={day} pos={pos} />}
          </li>
        );
      })}
    </ul>
  );
};
