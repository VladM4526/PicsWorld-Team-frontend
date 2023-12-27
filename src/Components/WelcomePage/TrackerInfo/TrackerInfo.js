import {
  InfoItems,
  InfoList,
  TrackerInfoContainer,
  SubTitle,
  InfoDescribeItems,
} from '../MainStyles.styled';

export const TrackerInfo = () => {
  return (
    <>
      <TrackerInfoContainer>
        <SubTitle>Why drink water</SubTitle>
        <InfoList>
          <InfoItems>
            <InfoDescribeItems>
              Supply of nutrients to all organs
            </InfoDescribeItems>
          </InfoItems>
          <InfoItems>
            <InfoDescribeItems>Providing oxygen to the lungs</InfoDescribeItems>
          </InfoItems>
          <InfoItems>
            <InfoDescribeItems>
              Maintaining the work of the heart
            </InfoDescribeItems>
          </InfoItems>
          <InfoItems>
            <InfoDescribeItems>
              Release of processed substances
            </InfoDescribeItems>
          </InfoItems>
          <InfoItems>
            <InfoDescribeItems>
              Ensuring the stabiInfoItemsty of the internal environment
            </InfoDescribeItems>
          </InfoItems>
          <InfoItems>
            <InfoDescribeItems>
              Maintaining within the normal temperature
            </InfoDescribeItems>
          </InfoItems>
          <InfoItems>
            <InfoDescribeItems>
              Maintaining an immune system capable of resisting disease
            </InfoDescribeItems>
          </InfoItems>
        </InfoList>
      </TrackerInfoContainer>
    </>
  );
};
