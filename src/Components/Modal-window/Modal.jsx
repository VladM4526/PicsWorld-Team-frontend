import { useState } from 'react';
import { ModalWrapper } from './ModalWrapper';
import { AddEditWater } from '../AddEditwater/AddEditWater';
const date = new Date(2023, 1, 25, 16, 3);
const data = { date, volumeWater: 250, id: 'o8ybt078tb-p' };
// для розробки, в подальшому - видалити файл
export const Modal = () => {
  // Вставити в компонент з якого має відкриватися вікно,
  //  та "повісити" onClick={ toggleModal } на подію  кнопки відкриття
  // -------------------------------------------------
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = e => {
    setIsOpen(isOpen => !isOpen);
  };
  // ----------------------------------------------------
  return (
    <>
      <button type="button" name="add" onClick={toggleModal}>
        add
      </button>
      <button type="button" name="edit" onClick={toggleModal}>
        edit
      </button>

      {/* додати в return компонента, в title треба передати заголовок модалки*/}
      {isOpen && (
        <ModalWrapper title="Add water" onClose={toggleModal}>
          {/* {------------------------------------------ */}
          {/* тут потрібно вставити свій компонент вмісту модалки, 
          і якщо потрібно закривати модалку наприклад по кнопці "SAVE"
           передати в пропси тоглмодал */}
          <AddEditWater onClose={toggleModal} isEdit={true} data={data} />
          {/* } ---------------------------------------- */}
        </ModalWrapper>
      )}
    </>
  );
};
