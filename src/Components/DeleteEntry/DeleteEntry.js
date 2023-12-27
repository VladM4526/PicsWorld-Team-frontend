import Modal from "react-modal";
import { Button, ButtonWrapper, customStyles, DeleteHeader, DeleteText } from "./DeleteEntry.styled";


export const DeleteEntry = ({ isOpen, onRequestClose }) => {

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
        style={customStyles}>

    <DeleteHeader>Delete entry</DeleteHeader>
    <DeleteText>Are you sure you want to delete the entry?</DeleteText>
    <ButtonWrapper>
    <Button type="submit" onClick={onRequestClose}>Cancel</Button>
    <Button type="submit" onClick={onRequestClose}>Delete</Button>
    </ButtonWrapper>
    </Modal>
  )
};

export default DeleteEntry;