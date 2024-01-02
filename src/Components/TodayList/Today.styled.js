import styled from "styled-components";



export const TodayWrapper = styled.div`
@media screen and (min-width: 320px) {
    width: 264px;
}

        @media screen and (min-width: 768px) {
        width: 656px;
        }

    @media screen and (min-width: 1440px) {
        width: 544px;
    }
`

export const TodayHeader = styled.h3`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
        font-size: 26px
        }
`

export const AddLink = styled.button`
display: inline-flex;
align-items: center; 
padding: 12px 0;
background-color: inherit;
text-decoration: none;
font-size: 16px;
line-height: 1.25;
color: #407BFF;
font-weight: 500;

&:hover {
  color: #FF9D43;
}

@media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
}`

export const SvgPlus = styled.svg`
width: 16px;
height: 16px;
margin-right: 8px;
fill: currentColor;

@media screen and (min-width: 768px) {
       width: 24px;
height: 24px;
        }
    `

export const WaterList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 254px;
    overflow-y: scroll;
    overflow-x: hidden;

&::-webkit-scrollbar {
  width: 4px; 
}

&::-webkit-scrollbar-track {
    background-color: #9EBBFF;
    border: 1px solid transparent;
    background-clip: content-box;
}

&::-webkit-scrollbar-thumb {
  height: 100px;
  background-color: #D7E3FF;
  border-radius: 8px; 
}
 
@media screen and (min-width: 320px) {
       width: 264px;
        }

        @media screen and (min-width: 768px) {
        width: 656px;
        }

    @media screen and (min-width: 1440px) {
        width: 534px;
    }`

export const WaterItem = styled.li`
   display: flex;
   padding: 12px 0;
   align-items: center;
   border-bottom: 1px solid #D7E3FF;
`

export const SvgCup = styled.svg`
   width: 26px;
   height: 26px;
   stroke: #407BFF;
   fill: #ECF2FF;

  @media screen and (min-width: 768px) {
        width: 36px;
        height: 36px;
        }



`

export const WaterText = styled.p`
  font-size: 18px;
  line-height: 1.33;
  font-weight: 400;
  color: #407BFF;
  margin-left: 12px;
  
  @media screen and (min-width: 768px) {
    margin-left: 16px;
        }

`

export const TimeText = styled.p`
font-size: 12px;
  line-height: 2;
  font-weight: 400;
  color: #2F2F2F;
  margin-left: 12px;

   @media screen and (min-width: 768px) {
       margin-left: 16px;
        }

`

export const SvgEdit = styled.svg`
width: 16px;
height: 16px;
stroke: #407BFF;
fill: #ECF2FF;
`

export const SvgDelete = styled.svg`
width: 16px;
height: 16px;
stroke: #EF5050;
fill: #ECF2FF;
`

export const SvgWrapper = styled.div`
display: flex;
width: 50px;
margin-left: auto;
gap: 18px;
`

export const ButtonEdit = styled.button`
   border: 0;
   background-color: inherit;
   margin: 0;
   padding: 0;
   position: relative;
   width: 16px;
    height: 16px;

    &::before {
  content: "";
    position: absolute;
  width: 16px;
  height: 1px;
  background-color: #9EBBFF;
  bottom: -2px;
  opacity: 0;
  transition: opacity 200ms ease-in;
}

&:hover {
  &::before {
    opacity: 1;
  }
}

`

export const ButtonDelete = styled.button`
   border: 0;
   background-color: inherit;
   margin: 0;
   padding: 0;
   position: relative;
   color: #EF5050;
   width: 16px;
    height: 16px;


    &::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 1px;
    background-color: #EF5050;
    bottom: -3px;
    opacity: 0;
    transition: opacity 200ms ease-in;
} 

&:hover {
  &::before {
    opacity: 1;
  }
} 

`