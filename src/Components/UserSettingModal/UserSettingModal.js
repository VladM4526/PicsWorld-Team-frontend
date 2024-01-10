import {
  Button,
  ErrorMsg,
  FormWrapper,
  InputWrapper,
  Label,
  // NavLinkStyled,
  // SignInHeader,
  StyledField,
  SvgStyled,
} from 'Components/FormLogin/Form.styled';
import { toast } from 'react-toastify';
import WaterTrackerIcons from '../../img/set-icons.svg';

import { useRef, useState } from 'react';
import {  Formik, Form, ErrorMessage} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux-files/auth/selectors';
import WaterTracker from '../../img/set-icons.svg';
import { settingsValidationSchema } from 'schemas/settingsValidationSchema';
import { LabelRadio, SexDiv } from './UserSettingModal.styled';
import {
  updateAvatarUser,
  updateUserProfileThunk,
} from '../../redux-files/auth/thunk';
import {
  ButtonIconUpload,
  ButtonUpload,
  // ContainerGender,
  ContainerUpload,
  // GenderList,
  // GenderListItem,
  ImageUser,
  TextUpload,
  Title,
  Upload,
} from './UserSettingModal.styled';



const initialValues = {
  email: '',
  gender: '',
  oldPassword: '',
  newPasword: '',
  repeatNewPassword: '',
};

export const UserSettingModal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [repeatShowPassword, setRepeatShowPassword] = useState(false);

  const handleSubmit = async values => {
      const userName = values.name;
      const userEmail = values.email;
      const userOldPassword = values.oldPassword;
      const userNewPassword = values.newPassword;
      const userRepeatPassword = values.repeatPassword;

      let data = null;
      
      if (userName && user.name !== userName) {
        data = { ...data, name: userName };
      };

      if (userEmail && user.email !== userEmail) {
        data = { ...data, email: userEmail };
      }
      if ((userOldPassword || userNewPassword || userRepeatPassword) && user.password === userOldPassword){
        if (userNewPassword !== userRepeatPassword) {
          toast.error(`Password must be the same`, {
            position: toast.POSITION.TOP_CENTER,
          }); 
      } else{
        data = {...data, oldPassword: userOldPassword, newPassword: userNewPassword}
      }
    }

    if (data){
      dispatch(updateUserProfileThunk(data));
    }
  };

  const togglePasswordVisibility = field => {
    if (field === 'newPasword') {
      setShowPassword(!showPassword);
    } else if (field === 'repeatNewPassword') {
      setRepeatShowPassword(!repeatShowPassword);
    }
  };

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
              {user.avatarURL && <ImageUser src={user.avatarURL} alt="avatar" />}
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
        </div>

        {/* <PhotoWrapper>
          <PhotoTitle>Your photo</PhotoTitle>
          <UploadPhotoWrapper>
            {userPhoto && <UserLogo src={userPhoto} />}
            {!userPhoto && (
              <UserNoLogo src={userPhoto}>
                <UserIcon width={80} height={80} />
              </UserNoLogo>
            )}
            <UploadPhotoButton>
              <UploadPhoto src={userPhoto} alt={userName} />
              Upload a photo
              <UploadPhotoInput type="file" accept="image/*" onChange={handlerSetUserPhoto} />
            </UploadPhotoButton>
          </UploadPhotoWrapper>
        </PhotoWrapper> */}

    <FormWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={settingsValidationSchema}
        onSubmit={values => {
          onClose();
          handleSubmit(values);
        }}
      >
        {({ isSubmitting, errors, touched, values }) => (
          <Form>
            <SexDiv>
            <Label>Your gender identity</Label>
              <LabelRadio>
                <StyledField
                  type="radio"
                  name="gender"
                  value="female"
                  // onChange={e => handleChange(e, formikProps)}
                />
                Girl
              </LabelRadio>
              <LabelRadio>
                <StyledField
                  type="radio"
                  name="gender"
                  value="male"
                  // onChange={e => handleChange(e, formikProps)}
                />
                Man
              </LabelRadio>
              </SexDiv>

            <Label>Your name</Label>
            <StyledField
              type="name"
              name="name"
              placeholder="David"
              $hasError={touched.email && errors.name}
              value={values.name}
            />

            <Label>E-mail</Label>
            <StyledField
              type="email"
              name="email"
              placeholder="david01@gmail.com"
              $hasError={touched.email && errors.email}
              value={values.email}
            />
            <ErrorMessage name="email" component={ErrorMsg} />

            <Label>
            Outdated password:
              <InputWrapper>
                <StyledField
                  type={showPassword ? 'text' : 'password'}
                  name="oldPassword"
                  placeholder="Password"
                  $hasError={touched.oldPassword && errors.oldPassword}
                  value={values.oldPassword}
                />
                <SvgStyled
                  height="16"
                  width="16"
                  onClick={() => togglePasswordVisibility('password')}
                >
                  <use
                    href={`${WaterTrackerIcons}#${
                      showPassword ? 'icon-eye-open' : 'icon-open-closed'
                    }`}
                  ></use>
                </SvgStyled>
                <ErrorMessage name="password" component={ErrorMsg} />
              </InputWrapper>
            </Label>
            <Label>
            New Password:
              <InputWrapper>
                <StyledField
                  type={repeatShowPassword ? 'text' : 'password'}
                  name="newPassword"
                  placeholder="Password"
                  $hasError={touched.newPassword && errors.newPassword}
                  value={values.newPassword}
                />
                <SvgStyled
                  height="16"
                  width="16"
                  onClick={() => togglePasswordVisibility('repeatPassword')}
                >
                  <use
                    href={`${WaterTrackerIcons}#${
                      showPassword ? 'icon-eye-open' : 'icon-open-closed'
                    }`}
                  ></use>
                </SvgStyled>
                <ErrorMessage name="repeatPassword" component={ErrorMsg} />
              </InputWrapper>
            </Label>
            <Label>
            Repeat new password:
              <InputWrapper>
                <StyledField
                  type={repeatShowPassword ? 'text' : 'password'}
                  name="repeatNewPassword"
                  placeholder="Password"
                  $hasError={touched.repeatNewPassword && errors.repeatNewPassword}
                  value={values.repeatPassword}
                />
                <SvgStyled
                  height="16"
                  width="16"
                  onClick={() => togglePasswordVisibility('repeatPassword')}
                >
                  <use
                    href={`${WaterTrackerIcons}#${
                      showPassword ? 'icon-eye-open' : 'icon-open-closed'
                    }`}
                  ></use>
                </SvgStyled>
                <ErrorMessage name="repeatPassword" component={ErrorMsg} />
              </InputWrapper>
            </Label>
            <Button type="submit" disabled={isSubmitting}>
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </FormWrapper>

    </>
  );

};