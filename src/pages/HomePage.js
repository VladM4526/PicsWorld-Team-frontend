import { Home } from 'Components/Home/Home';
// import { Header } from 'Components/WelcomePage/Header/Header';
import { Menu } from './Menu/Menu';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux-files/water/waterSelectors';
import { Loader } from 'Components/Loader/Loader';

export const HomePage = () => {
  const isLoading = useSelector(selectIsLoading)

  return (
    <>
      {/* <Header /> */}
      <Menu />
      <div>{isLoading && <Loader/>}</div>
      <Home />
    </>
  );
};
