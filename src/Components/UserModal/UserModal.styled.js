import styled from 'styled-components';

export const UserModalWrapper = styled.div`
  width: 118px;
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
`;

export const UserModalDiv = styled.div`
  padding: 16px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  position: absolute;
  right: 0px;
  z-index: 1;
`;

export const UserList = styled.ul``;

export const UserListItem = styled.li`
  margin-top: 16px;

  &:first-child {
    margin-top: 0px;
  }
`;

export const UserModalBtn = styled.button`
  display: flex;
  border: none;
  padding: 0;
  gap: 8px;
  background-color: transparent;
  cursor: pointer;
  align-items: center;
`;

export const UserModalBtnSvg = styled.svg`
  width: 16px;
  height: 16px;
`;
export const UserModalText = styled.p`
  color: #407bff;
`;
