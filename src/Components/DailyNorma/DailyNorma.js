import { DailyNormaHeader, DailyNormaWrapper, EditButton, LiterWrapper} from "./DailyNorma.styled"
import { LiterSpan} from "Components/DailyNormaModal/DailyNormaModal.styled";
import { ModalWrapper } from "Components/Modal-window/ModalWrapper";
import DailyNormaModal from "Components/DailyNormaModal/DailyNormaModal";
import { useSelector } from "react-redux";
import { selectDailyNorma } from "redux-files/auth/selectors";
import { useState } from "react";


const DailyNorma = () => {
  const [isOpen, setIsOpen] = useState(false);
  const water = useSelector(selectDailyNorma)
    const toggleModal = e => {
      setIsOpen(isOpen => !isOpen);
  };


  return (
    <DailyNormaWrapper>
        <DailyNormaHeader>My daily norma</DailyNormaHeader>
        <LiterWrapper>
        <LiterSpan>{water/1000} L</LiterSpan>
       <EditButton onClick={toggleModal}>Edit</EditButton>
       </LiterWrapper>
      {isOpen && (
        <ModalWrapper title="My daily norma" onClose={toggleModal}>
            <DailyNormaModal onClose={toggleModal}/>
        </ModalWrapper>
      )}
    </DailyNormaWrapper>
  )
}

export default DailyNorma
