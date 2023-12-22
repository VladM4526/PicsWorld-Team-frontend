import styled from 'styled-components';

export const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 16px;
  line-height: calc(20 / 16);
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  width: 100%;
  padding: 8px 30px;

  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  transition: all 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    background-color: #9ebbff;
    cursor: not-allowed;
  }
  @media screen and (min-width: 768px) {
    width: ${props => props.$width || '100%'};
    margin-left: ${props => props.$marginLeft || ''};
    margin-right: ${props => props.$marginRight || ''};
    font-size: 18px;
    line-height: calc(24 / 18);
    padding: 10px 30px;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: #ecf2ff;
  }
`;

export const ButtonEscape = styled(ButtonBase)`
  color: #407bff;
  background-color: #d7e3ff;
`;

export const ButtonAccept = styled(ButtonBase)`
  color: #ffffff;
  background-color: #ef5050;
`;

export const ButtonAccentLine = styled.button`
  transition: 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  position: relative;

  &:hover {
    color: #ff9d43;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #ff9d43;
    transition: width 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  }
  &:hover:before {
    width: 100%;
  }
`;
export const CommonStyles = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  font-size: 16px;
  line-height: calc(20 / 16);
  font-weight: 500;
  text-align: center;
  color: #fff;

  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  transition: all 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    background-color: #9ebbff;
    cursor: not-allowed;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`;

export const Button = styled(CommonStyles)`
  width: 280px;
  height: 36px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);
    width: 336px;
    height: 44px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 44px;
  }
`;

export const HoverBtnStyled = styled.button`
  transition: color 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  position: relative;
  &:hover {
    color: #ff9d43;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #ff9d43;
    transition: width 0.3s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;

export const HoverCloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 4px;
  border-radius: 100%;
  transition: background-color 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  &:hover {
    background-color: #d7e3ff;
  }
`;
