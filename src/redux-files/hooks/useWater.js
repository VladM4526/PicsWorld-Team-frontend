import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectNotes,
  selectStats,
} from '../water/waterSelectors';

export const useWater = () => {
  //   const filter = useSelector(selectFilter);
  const stats = useSelector(selectStats);
  const waterNotes = useSelector(selectNotes);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  //   const filteredContacts = useSelector(selectFilteredContacts);

  return {
    // filter,
    stats,
    waterNotes,
    error,
    isLoading,
    // filteredContacts,
  };
};
