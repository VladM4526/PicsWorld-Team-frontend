import {
  TrackerInfoContainer,
  TrackerInfoDescribe,
  TrackerInfoList,
  TrackerInfoListItem,
  TrackerInfoTitle,
} from './TrackerInfo.styled';

export const TrackerInfo = () => {
  return (
    <>
      <TrackerInfoContainer>
        <TrackerInfoTitle>Why drink water</TrackerInfoTitle>
        <TrackerInfoList>
          <TrackerInfoListItem>
            <TrackerInfoDescribe>
              Supply of nutrients to all organs
            </TrackerInfoDescribe>
          </TrackerInfoListItem>
          <TrackerInfoListItem>
            <TrackerInfoDescribe>
              Providing oxygen to the lungs
            </TrackerInfoDescribe>
          </TrackerInfoListItem>
          <TrackerInfoListItem>
            <TrackerInfoDescribe>
              Maintaining the work of the heart
            </TrackerInfoDescribe>
          </TrackerInfoListItem>
          <TrackerInfoListItem>
            <TrackerInfoDescribe>
              Release of processed substances
            </TrackerInfoDescribe>
          </TrackerInfoListItem>
          <TrackerInfoListItem>
            <TrackerInfoDescribe>
              Ensuring the stabiInfoItemsty of the internal environment
            </TrackerInfoDescribe>
          </TrackerInfoListItem>
          <TrackerInfoListItem>
            <TrackerInfoDescribe>
              Maintaining within the normal temperature
            </TrackerInfoDescribe>
          </TrackerInfoListItem>
          <TrackerInfoListItem>
            <TrackerInfoDescribe>
              Maintaining an immune system capable of resisting disease
            </TrackerInfoDescribe>
          </TrackerInfoListItem>
        </TrackerInfoList>
      </TrackerInfoContainer>
    </>
  );
};
