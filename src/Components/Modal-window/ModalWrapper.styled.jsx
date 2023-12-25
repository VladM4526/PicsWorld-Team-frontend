import styled from 'styled-components';
import { CloseIcon } from './CloseIcon';

export const ModalWrapStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.8);
  & body {
    overflow: hidden;
  }
`;

export const ModalWindowStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 540px;
  padding: 24px 12px;
  color: #2f2f2f;
  background-color: #fff;
  border-radius: 10px;
`;

export const ModalTitleWrapStyled = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h2 {
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.23;
  }
`;

// export const CloseIconStyled = styled.svg`
//   /* display: flex; */
//   /* justify-content: center; */
//   /* align-items: center; */
// `;

export const CloseButtonStyled = styled.button`
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: inherit;
  transition: all 300ms ease;
  > svg {
    stroke: #407bff;
  }
  &:hover {
    transform: rotate(90deg) scale(1.3);
    > svg {
      filter: drop-shadow(0 0 2px #407bff);
    }
  }
`;
