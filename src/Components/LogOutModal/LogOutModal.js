import { Button, DeleteText } from 'Components/DeleteEntry/DeleteEntry.styled.js';
import {
  LogOutBtns,
} from './LogOutModal.styled.js';


export const LogOutModal = ({ onClose }) => {
  // const dispatch = useDispatch()
  const handleSubmit = () => {
    // dispatch(); // сюди треба доставити функцію виходу користувача і розкоментувати dispatch
    onClose()
  }
  
  return (
    <>
        <DeleteText>Do you really want to leave?</DeleteText>
      <LogOutBtns>
        <Button typeStyle="button" $width="160px" onClick={onClose}>
          Cancel
        </Button>
        <Button typeStyle="accept" $width="160px" onClick={handleSubmit}>
          Log out
        </Button>
      </LogOutBtns>
    </>
  );
};
