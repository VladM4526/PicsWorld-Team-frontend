import styled from 'styled-components';

export const HeaderSection = styled.header`
  margin: 0 auto;
  padding: 8px 20px 0;
  max-width: 320px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    max-width: 704px;
    padding: 16px 32px 0;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 12px 112px 0;
  }
`;

export const LogoApp = styled.svg`
  width: 102px;
  height: 48px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderBtn = styled.button`
  width: 50px;
  background-color: transparent;
  color: #407bff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 58px;
    font-size: 18px;
    line-height: 1.33;
  }
`;
export const HeaderUserIcon = styled.svg`
  width: 28px;
  height: 28px;
  margin-left: 8px;
`;

export const LogoContainer = styled.div`
  max-width: 280px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    max-width: 704px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 1216px;
  }
`;
export const LogoIcon = styled.svg`
  width: 40px;
  @media only screen and (max-width: 767px) {
    height: 48px;
  }
`;
