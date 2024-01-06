import { PanelContainer, WaterPanel, WaterPercent} from "./WaterRatioPanel.styled"

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchWater } from "redux-files/water/waterOperations"
import { selectPercentege } from "redux-files/water/waterSelectors"
// const percentage = 40
const WaterRatioPanel = () => {
  
  const percentage = parseInt(useSelector(selectPercentege))
  console.log(percentage)
  const dispatch = useDispatch()
  // const percentage = (waterNotes[0].percentage)
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

  useEffect(() => {
              dispatch(fetchWater());
      }, [dispatch])
  
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
