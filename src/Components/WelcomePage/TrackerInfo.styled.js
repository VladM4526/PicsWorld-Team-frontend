import styled from 'styled-components';

export const TrackerInfoContainer = styled.div`
  width: 280px;
  background: #ecf2ff;
  padding: 24px 16px;
  margin-left: 20px;
  margin-right: 20px;
  margin: 40px auto;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    width: 494px;
    margin: 60px 0px 50px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
    margin-left: 81px;
    margin-top: 24px;
    margin-bottom: 0px;
    height: 332px;
  }
`;

export const TrackerInfoTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`;

export const TrackerInfoList = styled.ul``;

export const TrackerInfoListItem = styled.li`
  display: flex;
  align-items: center;

  margin-top: 16px;

  &:first-child {
    margin-top: 12px;
  }

  &::before {
    content: '';
    width: 8px;
    border-color: rgb(64, 123, 255);
    border-style: solid;
    border-width: 0px 8px 8px 0px;
    border-radius: 50%;
  }
`;

export const TrackerInfoDescribe = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  margin-left: 8px;
`;
