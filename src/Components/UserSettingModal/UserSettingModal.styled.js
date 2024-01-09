import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`;

export const ContainerUpload = styled.div`
  width: 222px;
  display: flex;
  align-items: center;
`;

export const ImageUser = styled.img`
  width: 80px;
  height: 80px;
`;

export const Upload = styled.input`
  &::file-selector-button {
    display: none;
  }
  visibility: hidden;
  display: none;
`;

export const ButtonUpload = styled.button`
  background: transparent;
  margin-left: 8px;
`;

export const ButtonIconUpload = styled.svg`
  width: 16px;
  height: 16px;
  fill: #407bff;
`;

export const TextUpload = styled.span`
v  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  margin-left: 8px;
  color: #407BFF;
`;

export const ContainerGender = styled.div`
  width: 256px;
`;

export const GenderList = styled.ul`
  display: flex;
`;

export const GenderListItem = styled.li`
  display: flex;
`;
