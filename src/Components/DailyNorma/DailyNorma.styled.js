import styled from 'styled-components';

export const DailyNormaWrapper = styled.div`

padding: 8px 20px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 12px;
border-radius: 10px;
border: 1px solid #ECF2FF;
background: #FFF;
box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
width: 164px;
height: 76px;
position: absolute;
top: 80px;
left: 20px;
`;

export const LiterWrapper = styled.div`


display: flex;
gap: 12px;
`;

export const DailyNormaHeader = styled.h2`
color: #2F2F2F;
font-family: Roboto;
font-size: 18px;
font-weight: 500;
line-height: 1.33;
`;

export const LiterSpan = styled.span`
  color: #407BFF;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
`

export const EditButton = styled.button`
  color: #8BAEFF;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
background: none;
border: none;
  &:hover,
  &:focus {
    ;
  }
`;

export const TextContact = styled.div`
    color: #4e4e4e;
    display: flex;
    flex-direction: column;
    gap: 8px;`