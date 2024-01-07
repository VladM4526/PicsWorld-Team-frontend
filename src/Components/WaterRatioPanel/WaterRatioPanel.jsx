import {
  ButtonStyled,
  PanelContainer,
  RatioWrapStyled,
  WaterPanel,
  WaterPercent,
} from './WaterRatioPanel.styled';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchWater } from 'redux-files/water/waterOperations';
import { selectPercentege } from 'redux-files/water/waterSelectors';
import { ModalWrapper } from 'Components/Modal-window/ModalWrapper';
import { AddEditWater } from 'Components/AddEditwater/AddEditWater';
import icons from '../../img/set-icons.svg';

// const percentage = 40
const WaterRatioPanel = () => {
  const percentage = parseInt(useSelector(selectPercentege));
  console.log(percentage);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = e => {
    setIsOpen(isOpen => !isOpen);
  };

  // const percentage = (waterNotes[0].percentage)
  // console.log(percentage)

  //  useEffect (() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await dispatch(fetchWater());
  //       console.log(response)
  //     } catch (error) {
  //       console.error('Error getting water data in useEffect:', error);
  //     }
  //   };

  //   fetchData();
  //  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchWater());
  }, [dispatch]);

  return (
    <>
      <RatioWrapStyled>
        <PanelContainer>
          <p>Today</p>
          <WaterPanel $percentage={percentage}></WaterPanel>
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
