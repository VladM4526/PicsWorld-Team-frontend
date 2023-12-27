import { useState } from 'react';
import { ModalWrapper } from './Modal-window/ModalWrapper';
import { AddEditWater } from './AddEditwater/AddEditWater';

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [act, setAct] = useState('');

  const toggleModal = e => {
    setIsOpen(isOpen => !isOpen);
    setAct(e.target.name || '');
  };
  return (
    <>
      <button type="button" name="add" onClick={toggleModal}>
        add
      </button>
      <button type="button" name="edit" onClick={toggleModal}>
        edit
      </button>
      {isOpen && (
        <ModalWrapper title="Add water" onClose={toggleModal}>
          <AddEditWater onClose={toggleModal} action={act} />
        </ModalWrapper>
      )}
    </>
  );
};
