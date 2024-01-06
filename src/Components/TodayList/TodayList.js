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
import { useDispatch, useSelector } from 'react-redux';
import { fetchWater } from 'redux-files/water/waterOperations';
import { selectNotes } from 'redux-files/water/waterSelectors';

// const arrayItemsTest = [];

// for (let i = 0; i <= 5; i += 1) {
//   arrayItemsTest[i] = { _id: nanoid(), waterVolume: 200, time: new Date() };
// }

const TodayList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[arrayItemsWater, setarrayItemsWater]=useState([])
  const dispatch = useDispatch ()
  const waterNotes = useSelector(selectNotes)
  console.log(waterNotes[0])

      useEffect(() => {
        const fetchData = async () => {
          try {
              await dispatch(fetchWater());
              setarrayItemsWater(waterNotes[0].waterRecords)
          } catch (error) {
            console.log(error)
            console.error('Error', error);
          }
        };
        fetchData();
      }, [dispatch, waterNotes])
  
  const toggleModal = e => {
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <TodayWrapper>
      <TodayHeader>Today</TodayHeader>
      <WaterList>
        {arrayItemsWater.map(item => (
          <TodayItem key={item._id} water={item.waterVolume} time={item.time} />
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
