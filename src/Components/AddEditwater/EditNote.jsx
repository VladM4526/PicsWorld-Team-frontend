import svgIcons from 'img/set-icons.svg';
import { EditWaterStyled } from './AddEditWater.styled';
import { locale } from 'helpers/locale';
import moment from 'moment';

const timeFormat = locale === 'eu' ? 'HH:mm' : 'hh:mm A';
export const EditNote = ({ editNote }) => {
  // const time = locale==='en'? moment(editNote)
  return (
    <EditWaterStyled>
      <svg height="24" width="24">
        <use href={`${svgIcons}#icon-glass`}></use>
      </svg>
      <div>
        <p className="edit-volume"> {editNote.volumeWater + ' ml'}</p>
        <p className="edit-time">{moment(editNote.date).format(timeFormat)}</p>
      </div>
    </EditWaterStyled>
  );
};
