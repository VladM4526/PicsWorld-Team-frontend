import {
  ButtonStyled,
  PanelContainer,
  RatioWrapStyled,
  WaterPanel,
  WaterPercent,
} from './WaterRatioPanel.styled';

import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchWater } from 'redux-files/water/waterOperations';
import { ModalWrapper } from 'Components/Modal-window/ModalWrapper';
import { AddEditWater } from 'Components/AddEditwater/AddEditWater';
import icons from '../../img/set-icons.svg';
import { useWater } from 'redux-files/hooks/useWater';

const WaterRatioPanel = () => {
  const { percentageToday } = useWater();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = e => {
    setIsOpen(isOpen => !isOpen);
  };

  useEffect(() => {
    dispatch(fetchWater());
  }, [dispatch]);

  return (
    <>
      <RatioWrapStyled>
        <PanelContainer>
          <p>Today</p>
          <WaterPanel $percentage={percentageToday}></WaterPanel>
          <WaterPercent>
            <div>0%</div>
            <div>50%</div>
            <div>100%</div>
          </WaterPercent>
        </PanelContainer>
        <ButtonStyled type="button" onClick={toggleModal}>
          <svg width={24} height={24}>
            <use href={`${icons}#icon-circle-plus`}></use>
          </svg>
          <p>Add Water</p>
        </ButtonStyled>
      </RatioWrapStyled>
      {isOpen && (
        <ModalWrapper title="Add water" onClose={toggleModal}>
          <AddEditWater onClose={toggleModal} />
        </ModalWrapper>
      )}
    </>
  );
};

export default WaterRatioPanel;
