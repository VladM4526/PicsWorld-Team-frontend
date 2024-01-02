import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../WelcomePage/Header/Header';
import { ContainerStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <ContainerStyled>
      <Header />
      <Outlet />
      <ToastContainer />
    </ContainerStyled>
  );
};
