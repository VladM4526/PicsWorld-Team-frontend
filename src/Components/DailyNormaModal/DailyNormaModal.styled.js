import styled from 'styled-components';
import {Field, Form, ErrorMessage } from 'formik';

// export const Form = styled.div`
//   @media screen and (min-width: 768px) {
//     padding-top: 70px;
//     padding-bottom: 70px;
//   }

//   &:hover {
    
//   }
// `;

export const ModalHeader = styled.h2`
color: #2F2F2F;
font-family: Roboto;
font-size: 26px;
font-style: normal;
font-weight: 500;
line-height: 1.23;
margin-bottom: 24px;
`;

export const SexDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

 @media screen and (min-width: 768px) {
  flex-direction: row;
  gap: 24px;

}
`;
export const Formula = styled.span`
  color: #407BFF;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
`

export const ExplainFormula = styled.div`
  color: #8F8F8F;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #D7E3FF;
  margin-top: 12px;
  margin-bottom: 24px;
`
export const FormHeader = styled.h3`
color: #2F2F2F;
font-size: 18px;
font-weight: 500;
line-height: 1.11;
margin-bottom: 16px;
`;


export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: auto;
`;

export const LabelRadio = styled.label`
  color: #2F2F2F;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  display: flex;
  gap: 8px;
`;

export const Label = styled.label`
  color: #2F2F2F;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelBold = styled.label`
  color: #2F2F2F;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledField = styled(Field)`
  display: flex;
  padding: 12px 10px;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #D7E3FF;
  background: #FFF;
  color: #407BFF;
   &:focus-visible{
        outline: 1px solid blue;
  } 
`;

export const WrapperLiter = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

export const TextLiter = styled.p`
    width: 190px;
    
    @media (min-width: 768px){
      width: 328px;
      }
`

export const LiterSpan = styled.span`
  color: #407BFF;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
`

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const ButtonWrapper = styled.div`
display: flex;
justify-content: flex-end;
`

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
  @media screen and (min-width: 768px) {
  width: 160px;

}
`
