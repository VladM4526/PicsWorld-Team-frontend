import styled from 'styled-components';

export const CalendarStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px 26px;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
  button {
    line-height: 1;
  }
  button[data-active='true'] {
    font-weight: bold;
  }
  li > p {
    color: #9ebbff;
    text-align: center;
    font-size: 10px;
    line-height: 1.6;
  }

  @media only screen and (min-width: 768px) {
    width: 646px;
    ul {
      grid-template-columns: repeat(10, 1fr);
      gap: 20px 34px;
    }
    li > p {
      font-size: 13px;
      line-height: 1.5385;
    }
  }

  @media only screen and (min-width: 1440px) {
    width: 538px;
    ul {
      gap: 20px 22px;
    }
    li > p {
      font-size: 12px;
      line-height: 1.5;
    }
  }
`;

export const CalendarHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;
  }
  > div {
    display: flex;
    gap: 12px;
    color: #407bff;
    text-align: center;
    font-size: 16px;
    line-height: 1.25;
    > p {
      width: 125px;
    }
  }
  @media only screen and (min-width: 768px) {
    h3 {
      font-size: 26px;
      line-height: 1.23;
    }
  }
`;

export const BtnArrowCalendarStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  svg {
    fill: #407bff;
  }
  svg[data-arrow='left'] {
    transform: rotate(180deg);
  }
`;

export const CalendarHoverStyled = styled.div`
  position: absolute;
  width: ${({ hover: { width } }) => width}px;
  height: ${({ hover: { height } }) => height}px;
  left: 50%;
  top: ${({ hover: { top } }) => top}px;
  transform: translateX(-50%);
  display: flex;
  padding: 24px 13px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  z-index: 1000;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #407bff;
    font-size: 16px;
    line-height: 1.25;
    h4 {
      font-weight: 400;
      line-height: 1.25;
    }
    button {
      background-color: inherit;
    }
  }
  p {
    color: #2f2f2f;
    font-size: 16px;
    line-height: 1.25;
    span {
      color: #407bff;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.3333;
    }
  }

  @media only screen and (min-width: 768px) {
    top: ${({ hover: { top } }) => top}px;
    right: ${({ hover: { right } }) => right}px;
    left: unset;
    transform: none;
    padding: 24px 16px;
  }
`;

export const DayStyled = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ borderColor }) => `1px solid ${borderColor}`};
  background-color: #fff;
  border-radius: 50%;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  p {
    font-size: 14px;
    line-height: 1.2857;
  }

  @media only screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
    p {
      font-size: 16px;
      line-height: 1.25;
    }
  }
`;
