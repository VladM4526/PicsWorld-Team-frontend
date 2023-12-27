import svgIcons from 'img/set-icons.svg';
import { EditWaterStyled } from './AddEditWater.styled';

export const EditedData = ({ editedData }) => {
  return (
    <EditWaterStyled>
      <svg height="24" width="24">
        <use href={`${svgIcons}#icon-glass`}></use>
      </svg>
      <div>
        <p className="edit-volume"> {editedData.volume + ' ml'}</p>
        <p className="edit-time">{editedData.time}</p>
      </div>
    </EditWaterStyled>
  );
};
