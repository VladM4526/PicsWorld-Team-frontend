import {
  UserModalWrapper,
  UserModalDiv,
  UserModalBtn,
  UserModalText,
} from './UserLogoModal.styled';
import WaterTracker from '../../img/set-icons.svg';

export const UserLogoModal = () => {
  return (
    <UserModalWrapper>
      <UserModalDiv>
        <UserModalBtn>
          <use href={`${WaterTracker}#icon-setting`}></use>
          <UserModalText>Setting</UserModalText>
        </UserModalBtn>
        <UserModalBtn>
          <use href={`${WaterTracker}#icon-log-out`}></use>
          <UserModalText>Log out</UserModalText>
        </UserModalBtn>
      </UserModalDiv>
    </UserModalWrapper>
  );
};
