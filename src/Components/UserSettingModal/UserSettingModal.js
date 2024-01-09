import { useRef } from 'react';
// import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux-files/auth/selectors';

// import { validateSchema } from 'schemas/validationSchema';
import { updateAvatarUser } from '../../redux-files/auth/thunk';

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
      // Handle the case where the user canceled file selection
      console.log('No file selected');
    }
  };

  const filePecker = useRef(null);

  const handlerClick = () => {
    filePecker.current.click();
  };
  return (
    <>
      <h1>Setting</h1>
      <div>
        <h1>Your photo</h1>
        {users.avatarURL && <img src={users.avatarURL} alt="avatar" />}
        <input
          ref={filePecker}
          type="file"
          accept=".png"
          onChange={handleChange}
        />
        <button type="button" onClick={handlerClick}>
          <span>Upload a photo</span>
        </button>

        <h1>Your gender identity</h1>
        <input type="radio" />
        <p>Girl</p>
        <input type="radio" />
        <p>Men</p>
      </div>
    </>
  );
};
