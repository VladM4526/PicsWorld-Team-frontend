import styled from 'styled-components';
export const UserModalWrapper = styled.div`
  height: fit-content;
  position: absolute;
  left: -100px;
  top: 20px;
`;

export const UserModalDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 118px;
  padding: 16px;
  gap: 16px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
`;
export const UserModalBtn = styled.button`
  display: flex;
  width: 100%;
  border: none;
  padding: 0;
  gap: 8px;
  background-color: transparent;
  cursor: pointer;
  align-items: center;
`;
export const UserModalText = styled.p`
  color: #407bff;
`;
