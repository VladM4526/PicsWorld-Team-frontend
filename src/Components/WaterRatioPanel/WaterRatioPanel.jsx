import { useState } from 'react';
import Spinner from 'react-spinner-material';
import { ModalWrapper } from 'Components/Modal-window/ModalWrapper';
import { AddEditWater } from 'Components/AddEditwater/AddEditWater';
import icons from '../../img/set-icons.svg';
import { useWater } from 'redux-files/hooks/useWater';
import {
  ButtonStyled,
  PanelContainer,
  RatioWrapStyled,
  WaterPanel,
  WaterPercent,
} from './WaterRatioPanel.styled';

const WaterRatioPanel = () => {
  const { percentageToday, isLoading } = useWater();

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = e => {
    setIsOpen(isOpen => !isOpen);
  };

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
          {isLoading ? (
            <Spinner radius={20} color={'#333'} stroke={3} visible={true} />
          ) : (
            <p>Add Water</p>
          )}
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
