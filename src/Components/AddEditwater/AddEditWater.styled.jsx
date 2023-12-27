import { ErrorMessage, Form } from 'formik';
import styled from 'styled-components';

export const FormStyled = styled(Form)`
  & h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.111;
    margin-bottom: 16px;
  }
  & h4 {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    margin-bottom: 12px;
  }
  & label {
    position: relative;
  }
  & input {
    color: #407bff;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    width: 120px;
    padding: 12px 10px;
    border-radius: 6px;
    border: 1px solid #d7e3ff;
  }
  @media only screen and (min-width: 768px) {
    & input {
      width: 100%;
    }
  }
`;

export const FormWrapStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  & .react-datepicker {
    color: #407bff;
  }
  & .react-datepicker__header {
    background-color: #d7e3ff;
  }
  @media only screen and (min-width: 768px) {
    & .react-datepicker-wrapper {
      width: 100%;
    }
  }
`;

export const EditWaterStyled = styled.div`
  display: flex;
  gap: 12px;
  width: 254px;
  padding: 8px 24px;
  margin-bottom: 24px;
  align-items: center;
  border-radius: 10px;
  background-color: #ecf2ff;
  & div {
    display: flex;
    gap: 16px;
    text-align: start;
  }
  & svg {
    fill: #407bff;
  }
  & .edit-volume {
    width: 60px;
    color: #407bff;
    font-size: 18px;
    line-height: 1.3333;
  }
  & .edit-time {
    width: 82px;
    color: #2f2f2f;
    font-size: 12px;
    line-height: 2;
  }
`;

export const AmountWrapStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  & [data-input='amount'] {
    color: #407bff;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3333;
    width: 96px;
    height: 36px;
    padding: 6px 10px;
    border-radius: 40px;
    background-color: #d7e3ff;
  }
  & [data-btn='amount'] {
    display: flex;
    width: 44px;
    height: 44px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    border: 1px solid #9ebbff;
    background-color: #fff;
    transition: all 0.2s linear;
    &:hover {
      box-shadow: 0px 0px 14px 0px rgba(64, 123, 255, 0.54);
    }
    &:active {
      box-shadow: none;
    }
    box-shadow: 0px 0px 4px 0px rgba(64, 123, 255, 0.2);
    & svg {
      fill: #407bff;
    }
  }
`;

export const AddWaterFooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  & p {
    color: #407bff;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3333;
    cursor: default;
  }
  & button {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    display: flex;
    width: 100%;
    height: 36px;
    padding: 8px 30px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    background-color: #407bff;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    transition: all 0.2s linear;
    &:hover {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
    &:active {
      box-shadow: none;
    }
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 24px;
    & p {
      width: 72px;
    }
    & button {
      width: 160px;
      height: auto;
      padding: 10px 30px;
    }
  }
`;

export const ErrorMsgStyled = styled(ErrorMessage)`
  color: #ef5050;
  font-size: 14px;
  line-height: 1.2857;
  position: absolute;
  top: calc(100% + 4px);
  & + input {
    border-color: #ef5050;
    color: #ef5050;
  }
`;
