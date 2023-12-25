import DailyNormaModal from "Components/DailyNormaModal/DailyNormaModal";
import { DailyNormaHeader, DailyNormaWrapper, EditButton, LiterWrapper} from "./DailyNorma.styled"
import { useState } from "react";
import { LiterSpan} from "Components/DailyNormaModal/DailyNormaModal.styled";

const DailyNorma = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
      };

    const handleEditModalClose = () => {
        setIsEditing(false);
      };


  return (
    <DailyNormaWrapper>
        <DailyNormaHeader>My daily norma</DailyNormaHeader>
        <LiterWrapper>
        <LiterSpan>2.0 L</LiterSpan>
       <EditButton onClick={handleEditClick}>Edit</EditButton>
       </LiterWrapper>
      {isEditing && (
          <DailyNormaModal
            isOpen = {isEditing}
        //   userInf={{ weight, time, sex, }}
          onRequestClose={handleEditModalClose}
        />
      )}
    </DailyNormaWrapper>
  )
}

export default DailyNorma
