import styled from 'styled-components';
// import {ErrorMessage} from 'formik';

// export const Form = styled.div`
//   @media screen and (min-width: 768px) {
//     padding-top: 70px;
//     padding-bottom: 70px;
//   }

//   &:hover {
    
//   }
// `;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 66px;
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
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:focus {
    box-shadow: 0px;
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
// export const ErrorMsg = styled(ErrorMessage)`
//   font-size: 14px;
//   color: red;
// `;