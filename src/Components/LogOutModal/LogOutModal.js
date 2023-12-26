import {
  LogOutBtns,
  LogOutClose,
  LogOutHeader,
  LogOutText,
  LogOutWindow,
} from './LogOutModal.styled.js';
import WaterTracker from '../../WelcomePage/img/set-icons.svg';

export const LogOutModal = ({ onClose }) => {
  return (
    <LogOutWindow>
      <LogOutHeader>
        <p>Log out</p>
        <LogOutClose onClick={handleCancel}>
          <HoverCloseBtn>
            <svg>
              <use href={`${WaterTracker}#icon-open-closed`}></use>
            </svg>
          </HoverCloseBtn>
        </LogOutClose>
      </LogOutHeader>
      <LogOutText>
        <p>Do you really want to leave?</p>
      </LogOutText>
      <LogOutBtns>
        <Button typeStyle="escape" $width="160px" onClick={handleCancel}>
          Cancel
        </Button>
        <Button typeStyle="accept" $width="160px" onClick={handleLogout}>
          Log out
        </Button>
      </LogOutBtns>
    </LogOutWindow>
  );
};
