import {
  selectError,
  selectIsLoading,
  selectNotes,
} from '../water/waterSelectors';
import { useSelector } from 'react-redux';

export const useWater = () => {
  //   const filter = useSelector(selectFilter);
  const waterNotes = useSelector(selectNotes);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  //   const filteredContacts = useSelector(selectFilteredContacts);

  return {
    // filter,
    waterNotes,
    error,
    isLoading,
    // filteredContacts,
  };
};
