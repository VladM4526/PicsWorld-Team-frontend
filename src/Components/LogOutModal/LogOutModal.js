import { useDispatch } from 'react-redux';

import {
  Button,
  ButtonLogOut,
  DeleteText,
} from 'Components/DeleteEntry/DeleteEntry.styled.js';
import { LogOutBtns } from './LogOutModal.styled.js';
import { logOutUser } from '../../redux-files/auth/thunk';

export const LogOutModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(logOutUser());

    onClose();
  };

  return (
    <>
      <DeleteText>Do you really want to leave?</DeleteText>
      <LogOutBtns>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
        <ButtonLogOut to="/" onClick={handleSubmit}>
          Log out
        </ButtonLogOut>
      </LogOutBtns>
    </>
  );
};
