import styled from 'styled-components';

export const HeaderSection = styled.header`
  margin: 0 auto;
  padding: 0px 20px;

  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 100%;
    padding: 0px 32px;
  }

  @media (min-width: 1440px) {
    max-width: 1216px;
  }
`;

export const LogoApp = styled.svg`
  display: block;
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
