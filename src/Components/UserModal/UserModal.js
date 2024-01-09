import { useState } from 'react';
import {
  UserModalWrapper,
  UserModalDiv,
  UserModalBtn,
  UserModalText,
  UserModalBtnSvg,
  UserList,
  UserListItem,
} from './UserModal.styled.js';
import WaterTracker from '../../img/set-icons.svg';
import { ModalWrapper } from '../../Components/Modal-window/ModalWrapper.jsx';

import { UserSettingModal } from '../UserSettingModal/UserSettingModal';
import { LogOutModal } from 'Components/LogOutModal/LogOutModal.js';

export const UserLogoModal = ({onCloseSetting}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setIsTitle] = useState('Setting');

  const toggleModal = e => { 
    setIsOpen(isOpen => !isOpen);
     };

  const onClickBtn = title => {
    setIsTitle(title);
    toggleModal();
  };


  return (
    <UserModalWrapper>
      <UserModalDiv>
        <UserList>
          <UserListItem>
            <UserModalBtn onClick={() => onClickBtn('Setting')}>
              <UserModalBtnSvg>
                <use href={`${WaterTracker}#icon-setting`}></use>
              </UserModalBtnSvg>           
                <UserModalText>Setting</UserModalText>
            </UserModalBtn>
          </UserListItem>
          <UserListItem>
            <UserModalBtn onClick={() => onClickBtn('Log out')}>
              <UserModalBtnSvg>
                <use href={`${WaterTracker}#icon-log-out`}></use>
              </UserModalBtnSvg>
              <UserModalText>Log out</UserModalText>
            </UserModalBtn>
          </UserListItem>
        </UserList>
      </UserModalDiv>

      {isOpen && (
        <ModalWrapper title={title} onClose={toggleModal}>
          {title === 'Setting' ? (
            <UserSettingModal onClose={toggleModal}/>
          ) : (
            <LogOutModal  onClose={toggleModal}/>
          )}
        </ModalWrapper>
      )}

    </UserModalWrapper>
  );
};
