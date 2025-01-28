import { FaTimes } from 'react-icons/fa';
import { useAppDispatch } from '../../../hook/redux';
import { readNote } from '../../../store/notesList/notesListSlice';
import { Note } from '../../../types/note';
import { DeleteBox, FixedContainer } from '../Modal.styles';
import { Box } from './ReadNoteModal.styles';
import parse from 'html-react-parser';

interface ReadNoteModalProps {
  type: string;
  note: Note;
}

const ReadNoteModal = ({ type, note }: ReadNoteModalProps) => {
  const dispatch = useAppDispatch();
  return (
    <FixedContainer>
      <Box style={{ backgroundColor: note.color }}>
        <DeleteBox
          onClick={() => dispatch(readNote({ type, id: note.id }))}
          className="readNote__close-btn"
        >
          <FaTimes />
        </DeleteBox>
        <div className="readNote__title">{note.title}</div>
        <div className="readNote_content">{parse(note.content)}</div>
      </Box>
    </FixedContainer>
  );
};

export default ReadNoteModal;
