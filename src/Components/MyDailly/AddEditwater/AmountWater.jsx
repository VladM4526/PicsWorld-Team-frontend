export const AmountWater = ({ volumeWater, onClick, step }) => (
  <div>
    <button
      type="button"
      name="decrease"
      disabled={volumeWater < 1}
      onClick={() => onClick(-step)}
    >
      -
    </button>
    <input
      type="text"
      name="volumeWaterDisplay"
      value={volumeWater + 'ml'}
      readOnly
    />
    <button
      type="button"
      name="increase"
      disabled={volumeWater >= 5000}
      onClick={() => onClick(step)}
    >
      +
    </button>
  </div>
);
