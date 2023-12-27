import { AmountWrapStyled } from './AddEditWater.styled';
import svgIcons from 'img/set-icons.svg';

export const AmountWater = ({ volumeWater, onClick, step }) => (
  <AmountWrapStyled>
    <button
      data-btn="amount"
      type="button"
      name="decrease"
      disabled={volumeWater < 1}
      onClick={() => onClick(-step)}
    >
      <svg height="24" width="24">
        <use href={`${svgIcons}#icon-minus-btn`}></use>
      </svg>
    </button>
    <input
      data-input="amount"
      type="text"
      name="volumeWaterDisplay"
      value={volumeWater + 'ml'}
      readOnly
    />
    <button
      data-btn="amount"
      type="button"
      name="increase"
      disabled={volumeWater >= 5000}
      onClick={() => onClick(step)}
    >
      <svg height="24" width="24">
        <use href={`${svgIcons}#icon-plus-btn`}></use>
      </svg>
    </button>
  </AmountWrapStyled>
);
