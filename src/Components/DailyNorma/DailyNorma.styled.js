import styled from 'styled-components';

export const DailyNormaWrapper = styled.div`
  padding: 8px 20px;
  width: 166px;
  height: 76px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid #ecf2ff;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    margin-top: 32px;
  }
`;

export const LiterWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const DailyNormaHeader = styled.h2`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const LiterSpan = styled.span`
  color: #407bff;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
`;

export const EditButton = styled.button`
  color: #8baeff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  background: none;
  border: none;
  &:hover,
  &:focus {
  }
`;

export const TextContact = styled.div`
  color: #4e4e4e;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
