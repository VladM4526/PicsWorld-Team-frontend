export const CreateCalendar = ({ year, month, currentDate }) => {
  return (
    <ul>
      {Array(new Date(year, month + 1, 0).getDate())
        .fill('')
        .map((_, i) => {
          const day = i + 1;
          const date = `${year}-${month + 1}-${day}`;
          const isNow =
            currentDate.toDateString() === new Date(date).toDateString();
          return (
            <li key={date} data-active={isNow}>
              <div>{day}</div>
              <p>{'100%'}</p>
            </li>
          );
        })}
    </ul>
  );
};
