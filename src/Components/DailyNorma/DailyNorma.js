// import DailyNormaModal from "Components/DailyNormaModal/DailyNormaModal";
import { DailyNormaHeader, DailyNormaWrapper, EditButton, LiterWrapper} from "./DailyNorma.styled"
import { useState } from "react";
import { LiterSpan} from "Components/DailyNormaModal/DailyNormaModal.styled";
import { ModalWrapper } from "Components/Modal-window/ModalWrapper";
import DailyNormaPortal from "Components/DailyNormaModal/DailyNormaPortal";
import { useSelector } from "react-redux";
import { selectDailyNorma } from "../../Redux/Auth/selectors";

const DailyNorma = () => {
    // const [isEditing, setIsEditing] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const water = 2000
    const toggleModal = e => {
      setIsOpen(isOpen => !isOpen);
    };
    // const handleEditClick = () => {
    //     setIsEditing(true);
    //   };

    // const handleEditModalClose = () => {
    //     setIsEditing(false);
    //   };


  return (
    <DailyNormaWrapper>
        <DailyNormaHeader>My daily norma</DailyNormaHeader>
        <LiterWrapper>
        <LiterSpan>{water/1000} L</LiterSpan>
       <EditButton onClick={toggleModal}>Edit</EditButton>
       </LiterWrapper>
      {/* {isEditing && (
          <DailyNormaModal
            isOpen = {isEditing}
        //   userInf={{ weight, time, sex, }}
          onRequestClose={handleEditModalClose}
        />
      )} */}
      {isOpen && (
        <ModalWrapper title="My daily norma" onClose={toggleModal}>
            <DailyNormaPortal onClose={toggleModal}/>
        </ModalWrapper>
      )}
    </DailyNormaWrapper>
  )
}

export default DailyNorma
