import svgIcons from 'img/set-icons.svg';
import { EditWaterStyled } from './AddEditWater.styled';
import { localeTime } from 'helpers/localeTime';

export const EditNote = ({ waterVolume, date }) => {
  return (
    <EditWaterStyled>
      <svg height="24" width="24">
        <use href={`${svgIcons}#icon-glass`}></use>
      </svg>
      <div>
        <p className="edit-volume"> {waterVolume + ' ml'}</p>
        <p className="edit-time">{localeTime(date)}</p>
      </div>
    </EditWaterStyled>
  );
};
