import { useRef } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux-files/auth/selectors';
import WaterTracker from '../../img/set-icons.svg';
// import { validateSchema } from 'schemas/validationSchema';
import {
  updateAvatarUser,
  updateUserProfileThunk,
} from '../../redux-files/auth/thunk';
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

export const UserSettingModal = () => {
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

  const onSubmitForm = e => {
    dispatch(updateUserProfileThunk(e));
  };

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: onSubmitForm(),
  });

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
        <h1>Your Name</h1>
        <form onSubmit={formik.onSubmitForm}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="For example: David"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <h1>Password</h1>
          Outdated password:
          <input
            id="name"
            name="name"
            type="text"
            placeholder="For example: David"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          New Password:
          <input
            id="name"
            name="name"
            type="text"
            placeholder="For example: David"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          Repeat new password:
          <input
            id="name"
            name="name"
            type="text"
            placeholder="For example: David"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};
