import {
  UserModalWrapper,
  UserModalDiv,
  UserModalBtn,
  UserModalText,
} from './UserLogoModal.styled';

export const UserLogoModal = ({ setModalName, isModalOpened }) => {
  return isModalOpened ? (
    <UserModalWrapper>
      <UserModalDiv>
        <UserModalBtn type="button" onClick={() => setModalName('settings')}>
          <UserModalText>Setting</UserModalText>
        </UserModalBtn>
        <UserModalBtn
          onClick={() => {
            setModalName('logout');
          }}
          type="button"
        >
          <UserModalText>Log out</UserModalText>
        </UserModalBtn>
      </UserModalDiv>
    </UserModalWrapper>
  ) : null;
};
