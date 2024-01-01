import styled from 'styled-components';
import  {NavLink} from 'react-router-dom';
import {ErrorMessage} from 'formik';
import bottleDesktop from '../../img/bottle_desktop_edited.png';
import bottleMob from '../../img/bottle_phone_edited.png';
import bottleTab from '../../img/bottle_tablet_edited.png';

// export const Form = styled.div`
//   @media screen and (min-width: 768px) {
//     padding-top: 70px;
//     padding-bottom: 70px;
//   }

//   &:hover {
    
//   }
// `;

export const FormSection = styled.div`
  margin: 0 auto;
  padding: 8px 20px 0;
  max-width: 280px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;


  @media (min-width: 768px) {
    max-width: 704px;
    padding: 16px 32px 0;
    
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 112px 198px 0;
    justify-content: flex-end;
  }
`;
export const ImgBottle = styled.div`
  min-height: calc(100vh - 66px);
  position: relative;
  overflow: hidden;
  z-index: -1;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${bottleMob});
    background-size: contain;
    background-position: center bottom;
    background-repeat: no-repeat;
    

    @media screen and (min-width: 768px) {
      background-image: url(${bottleTab});
      background-size: 80%;
      background-position: right 20px top 20px;

    }

    @media screen and (min-width: 1440px) {
      background-image: url(${bottleDesktop});
      background-position: left 0px top -20px;
      background-size: 60%;
    }
    
  }
`


export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  @media (min-width: 768px) {
    max-width: 336px;
    
  }

  @media (min-width: 1440px) {
    width: 384px;
  }
`

export const SignInHeader = styled.h2`
  color: #2F2F2F;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const Label = styled.label`
  color: #2F2F2F;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  
`;

export const StyledField = styled.input`
  display: flex;
  padding: 12px 10px;
  align-items: center;
  position: relative;
  width: 100%;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #D7E3FF;
  background: #FFF;
  color: #407BFF;
  &::placeholder {
    color: #9EBBFF;

    font-size: 16px;

    font-weight: 400;
    line-height: 1.25;
  }
  &:focus-visible{
        outline: none;
  }

`;

export const Button = styled.button`
  display: inline-flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #FFF;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  border-radius: 10px;
  background: #407BFF;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border: none;
  width: 100%;
  margin-bottom: 16px;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:focus {
    box-shadow: 0px;
  }
`

export const NavLinkStyled = styled(NavLink)`
    color: #8BAEFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  background: none;
  border: none;
    &:hover,
    &:focus {
     color: #FF9D43;
    }
`

export const SvgStyled = styled.svg`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`
export const InputWrapper = styled.div`
  position: relative;
`
export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;