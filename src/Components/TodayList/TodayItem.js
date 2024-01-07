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

import WaterTrackerIcons from '../../img/set-icons.svg';
import { ModalWrapper } from 'Components/Modal-window/ModalWrapper';
import { AddEditWater } from 'Components/AddEditwater/AddEditWater';
import DeleteEntry from 'Components/DeleteEntry/DeleteEntry';

const TodayItem = ({ id, water, time }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setIsTitle] = useState('Edit water');

  const toggleModal = e => {
    setIsOpen(isOpen => !isOpen);
  };

  const onClickBtn = title => {
    setIsTitle(title);
    toggleModal();
  };

  // const time = `${date.getHours()}:${date
  //   .getMinutes()
  //   .toString()
  //   .padStart(2, '0')}`;

  return (
    <WaterItem>
      <SvgCup>
        <use href={`${WaterTrackerIcons}#icon-glass`}></use>
      </SvgCup>
      <WaterText>{`${water} ml`}</WaterText>

      <TimeText>{time}</TimeText>

      <SvgWrapper>
        <ButtonEdit onClick={() => onClickBtn('Edit water')}>
          <SvgEdit>
            <use href={`${WaterTrackerIcons}#icon-edit`}></use>
          </SvgEdit>
        </ButtonEdit>

        <ButtonDelete onClick={() => onClickBtn('Delete Entry')}>
          <SvgDelete>
            <use href={`${WaterTrackerIcons}#icon-delete`}></use>
          </SvgDelete>
        </ButtonDelete>
      </SvgWrapper>
      {isOpen && (
        <ModalWrapper title={title} onClose={toggleModal}>
          {title === 'Edit water' ? (
            <AddEditWater
              onClose={toggleModal}
              isEdit={true}
              id={id}
              waterVolume={water}
              // ------------------------------------------
              HHmm={time.split(':')}
              // ---------------------------------------
            />
          ) : (
            <DeleteEntry onClose={toggleModal} id={id} />
          )}
        </ModalWrapper>
      )}
    </WaterItem>
  );
};

export default TodayItem;
