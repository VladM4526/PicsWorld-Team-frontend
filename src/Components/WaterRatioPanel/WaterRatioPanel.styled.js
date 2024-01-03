
import styled from 'styled-components';

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  p {
    color: #407BFF;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: 768px) {
    width: 356px;
  }
  @media screen and (min-width: 1440px) {
    width: 391px;
  }
`;

export const WaterPanel = styled.div`
  position: relative;
  height: 8px;
  background-color: #D7E3FF;
  width: calc(100% - 24px);
  border-radius: 10px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: calc(100% - 31px);
  }


  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: ${({ percentage }) => `calc(${percentage}%)`};
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background-color: #FFFFFF;
    border: 1px solid #407BFF;
    border-radius: 100%;
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    width: ${({ percentage }) => `${percentage}%`};
    height: 100%;
    background: #407BFF;
    border-radius: 10px;
    z-index: 0;
  }
`;

export const WaterPercent = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-left: 4px;
  div {
    color: #407BFF;
    font-size: 12px;
    line-height: 1.33;
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 1px;
      height: 8px;
      background-color: #D7E3FF;
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translate(-50%);
    }
  }
`;
