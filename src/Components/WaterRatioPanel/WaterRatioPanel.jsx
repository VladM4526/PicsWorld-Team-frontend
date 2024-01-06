import { useDispatch } from "react-redux"
import { PanelContainer, WaterPanel, WaterPercent} from "./WaterRatioPanel.styled"
import { useWater } from "redux-files/hooks/useWater"
import { useEffect } from "react"
import { fetchWater } from "redux-files/water/waterOperations"


const WaterRatioPanel = () => {
  const { waterNotes } = useWater ()
  console.log(waterNotes[0].percentage)
  const dispatch = useDispatch()
  const percentage = parseInt(waterNotes[0].percentage)
  console.log(percentage)

   useEffect (() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchWater ());
      } catch (error) {
        console.error('Error getting water data in useEffect:', error);
      }
    };

    fetchData();
  }, [dispatch]);
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
