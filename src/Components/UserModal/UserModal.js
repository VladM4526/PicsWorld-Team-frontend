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

export const UserLogoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = e => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <UserModalWrapper>
      <UserModalDiv>
        <UserList>
          <UserListItem>
            <UserModalBtn>
              <UserModalBtnSvg>
                <use href={`${WaterTracker}#icon-setting`}></use>
              </UserModalBtnSvg>
              Setting
              {isOpen && (
                <UserModalText>
                  <ModalWrapper title="User Setting" onClose={toggleModal}>
                    <UserSettingModal />
                  </ModalWrapper>
                </UserModalText>
              )}
            </UserModalBtn>
          </UserListItem>
          <UserListItem>
            <UserModalBtn>
              <UserModalBtnSvg>
                <use href={`${WaterTracker}#icon-log-out`}></use>
              </UserModalBtnSvg>
              <UserModalText>Log out</UserModalText>
            </UserModalBtn>
          </UserListItem>
        </UserList>
      </UserModalDiv>
    </UserModalWrapper>
  );
};
