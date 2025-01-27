import ReactQuill from 'react-quill';
import { Container } from './TextEditor.styles';
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from '../../utils/textEditorOptions';

interface TextEditorProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  color: string;
}

const TextEditor = ({ value, setValue, color }: TextEditorProps) => {
  return (
    <Container noteColor={color}>
      <ReactQuill
        formats={formats}
        modules={modules}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </Container>
  );
};

export default TextEditor;
