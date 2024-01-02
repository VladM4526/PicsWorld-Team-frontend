import styled from 'styled-components';

export const Div = styled.div`
  /* display: flex; */
  /* width: 280px; */
  /* padding: 24px 8px; */
  border-radius: 10px;
  background-color: #ecf2ff;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  & ul {
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px 26px;
  }
  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
  & li[data-active='true'] {
    font-weight: bold;
  }
  & li > p {
    color: #9ebbff;
    text-align: center;
    font-size: 10px;
    line-height: 1.6;
  }
`;

export const CalendarHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  & h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;
  }
  & > div {
    display: flex;
    gap: 12px;
    color: #407bff;
    text-align: center;
    font-size: 16px;
    line-height: 1.25;
    & > p {
      width: 125px;
    }
  }
  & button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & svg {
    fill: #407bff;
    cursor: pointer;
  }
  & svg[data-arrow='left'] {
    transform: rotate(180deg);
  }
`;

export const CalendarHoverStyled = styled.div`
  position: absolute;
  width: 280px;
  height: 188px;
  background-color: #fff;
  top: ${({ pos }) => pos.top}px;
  left: ${({ pos }) => pos.left}px;
  z-index: 1000;
`;

export const DayStyled = styled.div`
  font-size: 14px;
  width: 32px;
  height: 32px;
  /* margin-bottom: 4px; */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ff9d43;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  & > p {
    height: 14px;
  }
`;