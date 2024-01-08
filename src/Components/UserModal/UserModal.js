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

export const UserLogoModal = () => {
  return (
    <UserModalWrapper>
      <UserModalDiv>
        <UserList>
          <UserListItem>
            <UserModalBtn>
              <UserModalBtnSvg>
                <use href={`${WaterTracker}#icon-setting`}></use>
              </UserModalBtnSvg>
              <UserModalText>Setting</UserModalText>
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
