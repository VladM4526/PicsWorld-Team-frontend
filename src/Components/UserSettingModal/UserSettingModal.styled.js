import styled from 'styled-components';
import {Field,ErrorMessage } from 'formik';

export const LabelRadio = styled.label`
  color: #2F2F2F;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  display: flex;
  gap: 8px;
`;
export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
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

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`;

export const ContainerUpload = styled.div`
  width: 222px;
  display: flex;
  align-items: center;
`;

export const ImageUser = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Upload = styled.input`
  &::file-selector-button {
    display: none;
  }
  visibility: hidden;
  display: none;
`;

export const ButtonUpload = styled.button`
  background: transparent;
  margin-left: 8px;
`;

export const ButtonIconUpload = styled.svg`
  width: 16px;
  height: 16px;
  fill: #407bff;
`;

export const TextUpload = styled.span`
v  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  margin-left: 8px;
  color: #407BFF;
`;

export const ContainerGender = styled.div`
  width: 256px;
`;

export const GenderList = styled.ul`
  display: flex;
`;

export const GenderListItem = styled.li`
  display: flex;
`;