import { useState } from 'react';
import TodayItem from './TodayItem';

import { AddEditWater } from 'Components/AddEditwater/AddEditWater';
import { ModalWrapper } from 'Components/Modal-window/ModalWrapper';
import { useWater } from 'redux-files/hooks/useWater';
import {
  AddLink,
  SvgPlus,
  WaterList,
  TodayWrapper,
  TodayHeader,
} from './Today.styled';
import WaterTrackerIcons from '../../img/set-icons.svg';

const TodayList = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const dispatch = useDispatch();
  const { waterNotes } = useWater();

  // useEffect(() => {
  //   dispatch(fetchWater());
  // }, [dispatch]);
  const toggleModal = e => {
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <TodayWrapper>
      <TodayHeader>Today</TodayHeader>
      <WaterList>
        {waterNotes.map(item => (
          <TodayItem
            key={item._id}
            id={item._id}
            editWater={item.waterVolume}
            editDate={item.date}
          />
        ))}
      </WaterList>
              <AddLink onClick={toggleModal}>
          <SvgPlus>
            <use href={`${WaterTrackerIcons}#icon-plus-transparent`}></use>
          </SvgPlus>
          <span>Add water</span>
        </AddLink>
      {isOpen && (
        <ModalWrapper title="Add water" onClose={toggleModal}>
          <AddEditWater onClose={toggleModal} />
        </ModalWrapper>
      )}
    </TodayWrapper>
  );
};

export default TodayList;
