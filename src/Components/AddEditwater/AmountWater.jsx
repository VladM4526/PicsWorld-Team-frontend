import { AmountWrapStyled } from './AddEditWater.styled';
import svgIcons from 'img/set-icons.svg';

export const AmountWater = ({ waterVolume, onClick, step }) => (
  <AmountWrapStyled>
    <button
      data-btn="amount"
      type="button"
      name="decrease"
      disabled={waterVolume < 1}
      onClick={() => onClick(-step)}
    >
      <svg height="24" width="24">
        <use href={`${svgIcons}#icon-minus-btn`}></use>
      </svg>
    </button>
    <input
      data-input="amount"
      type="text"
      name="waterVolumeDisplay"
      value={waterVolume + 'ml'}
      readOnly
    />
    <button
      data-btn="amount"
      type="button"
      name="increase"
      disabled={waterVolume >= 3000}
      onClick={() => onClick(step)}
    >
      <svg height="24" width="24">
        <use href={`${svgIcons}#icon-plus-btn`}></use>
      </svg>
    </button>
  </AmountWrapStyled>
);
