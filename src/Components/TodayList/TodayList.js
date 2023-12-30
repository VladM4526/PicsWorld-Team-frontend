import { nanoid } from 'nanoid';
import {
    AddLink,
    SvgPlus,
    WaterList,
    TodayWrapper,
    TodayHeader,
  } from './Today.styled';
import WaterTrackerIcons from './img/set-icons.svg';
import TodayItem from './TodayItem';
import { useState } from 'react';
import { AddEditWater } from 'Components/AddEditwater/AddEditWater';
import { ModalWrapper } from 'Components/Modal-window/ModalWrapper';

const arrayItemsWater = [];

for (let i = 0; i <= 5; i += 1) {
    arrayItemsWater[i] = { id: nanoid(), water: 200, date: new Date() };
} 

const TodayList = () => {
    const [isOpen, setIsOpen] = useState(false);
  const toggleModal = e => {
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <TodayWrapper>
      <TodayHeader>Today</TodayHeader>
      <WaterList>
        {arrayItemsWater.map(item => (
          <TodayItem key={nanoid()} water={item.water} date={item.date} />
        ))}
        <AddLink onClick={toggleModal}>
          <SvgPlus>
            <use href={`${WaterTrackerIcons}#icon-plus-transparent`}></use>
          </SvgPlus>
          <span>Add water</span>
        </AddLink>
      </WaterList>
      {isOpen && (
        <ModalWrapper title="Add water" onClose={toggleModal}>
          <AddEditWater onClose={toggleModal}/> 
        </ModalWrapper>
      )}
    </TodayWrapper>
  );
};

export default TodayList;