import styled from 'styled-components';

export const RatioWrapStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }
  @media screen and (min-width: 1440px) {
    gap: 23px;
  }
`;

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  p {
    color: #407bff;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: 768px) {
    min-width: 356px;
    width: unset;
  }
  @media screen and (min-width: 1440px) {
    min-width: 391px;
  }
`;

export const WaterPanel = styled.div`
  position: relative;
  height: 8px;
  background-color: #d7e3ff;
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
    left: ${({ $percentage }) => `calc(${$percentage}%)`};
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background-color: #ffffff;
    border: 1px solid #407bff;
    border-radius: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    width: ${({ $percentage }) => `${$percentage}%`};
    height: 100%;
    background: #9ebbff;
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
    color: #407bff;
    font-size: 12px;
    line-height: 1.33;
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 1px;
      height: 8px;
      background-color: #d7e3ff;
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translate(-50%);
    }
  }
`;

export const ButtonStyled = styled.button`
  color: #fff;
  display: flex;
  width: auto;
  height: 36px;
  padding: 6px 76px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  & p {
    font-size: 16px;
    line-height: 1.25;
  }
  & svg {
    stroke: #fff;
    fill: #407bff;
  }
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    min-width: 336px;
    height: 44px;
    padding: 10px 104px;
    p {
      font-size: 18px;
      line-height: 1.3333;
    }
  }
  @media screen and (min-width: 1440px) {
    min-width: 178px;
    padding: 10px 30px;
    gap: 10px;
  }
`;
