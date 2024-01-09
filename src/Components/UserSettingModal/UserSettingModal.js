import { useRef } from 'react';
// import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux-files/auth/selectors';
import WaterTracker from '../../img/set-icons.svg';
// import { validateSchema } from 'schemas/validationSchema';
import { updateAvatarUser } from '../../redux-files/auth/thunk';
import {
  ButtonIconUpload,
  ButtonUpload,
  ContainerGender,
  ContainerUpload,
  GenderList,
  GenderListItem,
  ImageUser,
  TextUpload,
  Title,
  Upload,
} from './UserSettingModal.styled';

// import WaterTrackerIcons from '../../img/set-icons.svg';

export const UserSettingModal = ({ onClose }) => {
  //   const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(selectUser);

  const handleChange = e => {
    const files = e.target.files;
    if (files.length > 0) {
      const newPictureUser = new FormData();
      newPictureUser.append('avatar', files[0]);
      dispatch(updateAvatarUser(newPictureUser));
      console.log(newPictureUser);
    } else {
      console.log('No file selected');
    }
  };

  const filePecker = useRef(null);

  const handlerClick = () => {
    filePecker.current.click();
  };
  return (
    <>
      <div>
        <Title>Your photo</Title>
        <ContainerUpload>
          {users.avatarURL && <ImageUser src={users.avatarURL} alt="avatar" />}
          <Upload
            ref={filePecker}
            type="file"
            accept=".png"
            onChange={handleChange}
          />
          <ButtonUpload type="button" onClick={handlerClick}>
            <ButtonIconUpload>
              <use href={`${WaterTracker}#icon-upload`}></use>
            </ButtonIconUpload>
            <TextUpload>Upload a photo</TextUpload>
          </ButtonUpload>
        </ContainerUpload>

        <Title>Your gender identity</Title>
        <ContainerGender>
          <GenderList>
            <GenderListItem>
              <input type="radio" />
              <p>Girl</p>
            </GenderListItem>
            <GenderListItem>
              <input type="radio" />
              <p>Men</p>
            </GenderListItem>
          </GenderList>
        </ContainerGender>
      </div>
    </>
  );
};
