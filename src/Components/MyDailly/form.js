import { useState } from 'react';
import { AddWater } from './AddEditwater/Add-water.jsx';
import { ModalWrapper } from '../Modal-window/ModalWrapper.jsx';

export const Form = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(modal => !modal);
  return (
    <>
      <h1>hello</h1>

      <button type="button" onClick={() => toggleModal()}>
        modal
      </button>
      {modal && (
        <ModalWrapper title="Add water" onClose={toggleModal}>
          <AddWater onClose={toggleModal} />
        </ModalWrapper>
      )}
    </>
  );
};
