import styled from 'styled-components';

export const ModalWrapStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.8);
`;

export const ModalWindowStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: auto;
  padding: 24px 12px;
  color: #2f2f2f;
  background-color: #fff;
  border-radius: 10px;
  @media only screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
  }
`;

export const ModalTitleWrapStyled = styled.div`
  display: flex;
  margin-bottom: 24px;
  justify-content: space-between;
  align-items: center;

  & > h2 {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
  }
`;

export const CloseButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  transition: all 300ms ease;
  &:hover {
    transform: rotate(90deg) scale(1.3);
    > svg {
      filter: drop-shadow(0 0 2px #407bff);
    }
  }
`;