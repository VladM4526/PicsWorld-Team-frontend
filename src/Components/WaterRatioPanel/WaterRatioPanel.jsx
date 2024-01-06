import { PanelContainer, WaterPanel, WaterPercent} from "./WaterRatioPanel.styled"

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchWater } from "redux-files/water/waterOperations"
import { selectNotes } from "redux-files/water/waterSelectors"
const percentage = 40
const WaterRatioPanel = () => {
  
  // const waterNotes = useSelector(selectNotes)
  // console.log(waterNotes[0].percentage)
  // const dispatch = useDispatch()
  // const percentage = parseInt(waterNotes[0].percentage)
  // console.log(percentage)

  //  useEffect (() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await dispatch(fetchWater());
  //       console.log(response)
  //     } catch (error) {
  //       console.error('Error getting water data in useEffect:', error);
  //     }
  //   };

  //   fetchData();
  //  }, [dispatch]);
  
  return (
    <PanelContainer>
          <p>Today</p>
          <WaterPanel $percentage={percentage}>
           
          </WaterPanel>
          <WaterPercent>
            <div>0%</div>
            <div>50%</div>
            <div>100%</div>
          </WaterPercent>
    </PanelContainer>
  )
}

export default WaterRatioPanel
