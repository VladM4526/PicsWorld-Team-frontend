import svgIcons from 'img/set-icons.svg';
import { EditWaterStyled } from './AddEditWater.styled';

export const EditNote = ({ editNote }) => {
  return (
    <EditWaterStyled>
      <svg height="24" width="24">
        <use href={`${svgIcons}#icon-glass`}></use>
      </svg>
      <div>
        <p className="edit-volume"> {editNote.volume + ' ml'}</p>
        <p className="edit-time">{editNote.time}</p>
      </div>
    </EditWaterStyled>
  );
};
