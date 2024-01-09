import styled from 'styled-components';

export const ModalWrapStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.8);
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  z-index: 100;

  @media only screen and (min-width: 768px) {
    padding-top: 40px;
  }
  @media only screen and (min-width: 1440px) {
    align-items: center;
  }

  & div[name='scroll-container'] {
    width: auto;
    height: auto;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
    @media only screen and (min-width: 1440px) {
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
    }

    &::-webkit-scrollbar-thumb {
      background-color: #737272;
      border-radius: 10px;
    }
  }
`;

export const ModalWindowStyled = styled.div`
  /* position: absolute; */
  /* top: 10%; */
  width: 280px;
  margin: auto;
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
    transform: scale(1.3);
    > svg {
      filter: drop-shadow(0 0 2px #407bff);
    }
  }
`;
