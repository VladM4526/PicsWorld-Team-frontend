import {
  LogOutBtns,
  LogOutClose,
  LogOutHeader,
  LogOutText,
  LogOutWindow,
  HoverCloseBtn,
  Button,
} from './LogOutModal.styled.js';
import WaterTracker from '../../WelcomePage/img/set-icons.svg';

export const LogOutModal = ({ onClose }) => {
  return (
    <LogOutWindow>
      <LogOutHeader>
        <p>Log out</p>
        <LogOutClose>
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
        <Button typeStyle="escape" $width="160px">
          Cancel
        </Button>
        <Button typeStyle="accept" $width="160px">
          Log out
        </Button>
      </LogOutBtns>
    </LogOutWindow>
  );
};
