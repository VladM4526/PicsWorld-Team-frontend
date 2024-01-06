import { nanoid } from 'nanoid';
import {
  AddLink,
  SvgPlus,
  WaterList,
  TodayWrapper,
  TodayHeader,
} from './Today.styled';
import WaterTrackerIcons from '../../img/set-icons.svg';
import TodayItem from './TodayItem';
import { useEffect, useState } from 'react';
import { AddEditWater } from 'Components/AddEditwater/AddEditWater';
import { ModalWrapper } from 'Components/Modal-window/ModalWrapper';
// import { useWater } from 'redux-files/hooks/useWater';
import { useDispatch } from 'react-redux';
import { fetchWater } from 'redux-files/water/waterOperations';

const arrayItemsWater = [];

for (let i = 0; i <= 5; i += 1) {
  arrayItemsWater[i] = { _id: nanoid(), waterVolume: 200, time: new Date() };
}

const TodayList = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { waterNotes } = useWater()
  // console.log(waterNotes[0].waterRecords)
  const dispatch = useDispatch()
  // const arrayTest = waterNotes[0].waterRecords
  // console.log(arrayTest[0].time)
  //console.log(arrayTest[0].waterVolume)
   useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchWater());
      } catch (error) {
        console.error('Error getting water data in useEffect:', error);
      }
    };

    fetchData();
  }, [dispatch]);
  const toggleModal = e => {
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <TodayWrapper>
      <TodayHeader>Today</TodayHeader>
      <WaterList>
        {arrayItemsWater.map(item => (
          <TodayItem key={item._id} water={item.waterVolume} date={item.time} />
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
          <AddEditWater onClose={toggleModal} />
        </ModalWrapper>
      )}
    </TodayWrapper>
  );
};

export default TodayList;
