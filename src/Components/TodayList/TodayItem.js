import { useState } from 'react';
import {
  WaterItem,
  WaterText,
  TimeText,
  SvgWrapper,
  ButtonEdit,
  ButtonDelete,
  SvgEdit,
  SvgDelete,
  SvgCup,
} from './Today.styled';

import WaterTrackerIcons from './img/set-icons.svg';
import { ModalWrapper } from 'Components/Modal-window/ModalWrapper';
import { AddEditWater } from 'Components/AddEditwater/AddEditWater';

const TodayItem = ({ water, date }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = e => {
      setIsOpen(isOpen => !isOpen);
    };
    
  const time = `${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

return (
    <WaterItem>
      <SvgCup>
        <use href={`${WaterTrackerIcons}#icon-edit`}></use>
      </SvgCup>
      <WaterText>{`${water} ml`}</WaterText>
      
      <TimeText>{time}</TimeText>

      <SvgWrapper>
        <ButtonEdit onClick={toggleModal}>
            <SvgEdit>
                <use href={`${WaterTrackerIcons}#icon-edit`}></use>
            </SvgEdit>
        </ButtonEdit>
        {isOpen && (
        <ModalWrapper title="Add water" onClose={toggleModal}>
          <AddEditWater onClose={toggleModal} isEdit={true}/> 
        </ModalWrapper>
      )}
        <ButtonDelete>
            <SvgDelete>
                <use href={`${WaterTrackerIcons}#icon-delete`}></use>
            </SvgDelete>
        </ButtonDelete>
      </SvgWrapper>

    </WaterItem>
  );
};

export default TodayItem;