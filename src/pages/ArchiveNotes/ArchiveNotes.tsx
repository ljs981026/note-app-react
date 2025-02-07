import { MainWrapper } from "../../components";
import { useAppSelector } from "../../hook/redux"
import { Container, EmptyMsgBox } from "../../styles/styles";

const ArchiveNotes = () => {

  const { archiveNotes } = useAppSelector((state) => state.noteList);

  return (
    <Container>
      {archiveNotes.length === 0 ?
        <EmptyMsgBox>노트가 없습니다.</EmptyMsgBox>  
        :
        <MainWrapper notes={archiveNotes} type="archive" />
      }
    </Container>
  )
}

export default ArchiveNotes