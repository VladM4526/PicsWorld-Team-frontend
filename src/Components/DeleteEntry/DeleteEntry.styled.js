import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DeleteHeader = styled.h2`
  color: #2f2f2f;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  margin-bottom: 24px;
`;

export const DeleteText = styled.p`
  color: #2f2f2f;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: 24px;
`;

export const customStyles = {
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
    zIndex: '1200',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '24px 12px',
    border: 'none',
    borderRadius: '10px',
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    overflow: 'hidden',
    '@media screen (max-width: 769px)': {
      padding: '32px 24px',
    },
  },
};

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  color: #407bff;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  border-radius: 10px;
  background: #d7e3ff;
  cursor: pointer;
  &:hover {
    background: #ef5050;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    color: #fff;
  }
  &:focus {
    background: #ef5050;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    color: #fff;
  }
`;

export const ButtonLogOut = styled(NavLink)`
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  color: #407bff;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  border-radius: 10px;
  background: #ef5050;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
`;
