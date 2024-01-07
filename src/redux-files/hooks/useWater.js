import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectNotes,
  selectPercentToday,
  selectPercentage,
  selectStats,
} from '../water/waterSelectors';

export const useWater = () => {
  const stats = useSelector(selectStats);
  const waterNotes = useSelector(selectNotes);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const percentageToday = useSelector(selectPercentToday);
  const percentage = useSelector(selectPercentage);

  return {
    stats,
    waterNotes,
    error,
    isLoading,
    percentageToday,
    percentage,
  };
};
