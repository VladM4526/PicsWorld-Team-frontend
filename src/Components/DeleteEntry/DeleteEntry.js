
import { Button, ButtonWrapper, DeleteText } from "./DeleteEntry.styled";


export const DeleteEntry = ({ onClose }) => {

  return (
    <>
      <DeleteText>Are you sure you want to delete the entry?</DeleteText>
      <ButtonWrapper>
      <Button type="button" onClick={onClose}>Cancel</Button>
      <Button type="button" onClick={onClose}>Delete</Button>
    </ButtonWrapper>
    </>
  )
};

export default DeleteEntry;