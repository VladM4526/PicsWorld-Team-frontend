
import { useDispatch } from "react-redux";
import { Button, ButtonWrapper, DeleteText } from "./DeleteEntry.styled";
import { deleteWater } from "redux-files/water/waterOperations";


export const DeleteEntry = ({ onClose, id }) => {
  const dispatch = useDispatch()
  const handleSubmit = () => {
    dispatch(deleteWater(id));
    onClose()
}

  return (
    <>
      <DeleteText>Are you sure you want to delete the entry?</DeleteText>
      <ButtonWrapper>
      <Button type="button" onClick={onClose}>Cancel</Button>
      <Button type="submit" onClick={handleSubmit}>Delete</Button>
    </ButtonWrapper>
    </>
  )
};

export default DeleteEntry;