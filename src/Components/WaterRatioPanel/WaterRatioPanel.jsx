import { PanelContainer, WaterPanel, WaterPercent} from "./WaterRatioPanel.styled"


const WaterRatioPanel = () => {
    const percentage = 40
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
