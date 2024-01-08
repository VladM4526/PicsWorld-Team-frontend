import { Today } from './Today';
import { DailyTrackerWrapStyled, HomeWrapStyled } from './Home.styled';
import WaterRatioPanel from 'Components/WaterRatioPanel/WaterRatioPanel';
import { ContainerStyled } from 'Components/Home/Container.styled';
import DailyNorma from 'Components/DailyNorma/DailyNorma';
import { BgImg } from './BgImg';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchWater } from 'redux-files/water/waterOperations';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWater());
  }, [dispatch]);

  return (
    <ContainerStyled>
      <HomeWrapStyled>
        <DailyTrackerWrapStyled>
          <DailyNorma />
          <BgImg />
          <WaterRatioPanel />
        </DailyTrackerWrapStyled>
        <Today />
      </HomeWrapStyled>
    </ContainerStyled>
  );
};
