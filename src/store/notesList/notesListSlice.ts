import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../types/note";
import notes from "../../notesData";

interface NoteState {
  mainNotes: Note[];
  archiveNotes: Note[];
  trashNotes: Note[];
  editNote: null | Note; 
}

const initialState: NoteState = {
  mainNotes: [...notes],
  archiveNotes: [],
  trashNotes: [],
  editNote: null
}

enum noteType {
  mainNotes = 'mainNotes',
  archiveNotes = 'archiveNotes',
  trashNotes= 'trashNotes'
}

const notesListSlice = createSlice({
  name: "noteList",
  initialState,
  reducers: {
    // update MainNotes
    setMainNotes: (state, {payload}) => {
      // edit note
      if(state.mainNotes.find(({id}) => id === payload.id)) {
        state.mainNotes =state.mainNotes.map((note) => 
        note.id === payload.id ? payload : note)
      }
      // create note
      else {
        state.mainNotes.push(payload);
      }
    },
    setTrashNotes: (state, {payload}) => {
      state.mainNotes = state.mainNotes.filter(({id}) => id !== payload.id);
      state.archiveNotes = state.archiveNotes.filter(({id}) => id !== payload.id);
      state.trashNotes.push({ ...payload, isPinned: false });
    },
    setArchiveNotes: (state, {payload}) => {
      state.mainNotes = state.mainNotes.filter(({id}) => id !== payload.id);
      state.archiveNotes.push({ ...payload, isPinned: false })
    },
    unArchiveNote: (state, {payload}) => {
      state.archiveNotes = state.archiveNotes.filter(({id}) => id !== payload.id);
      state.mainNotes.push(payload);
    },
    restoreNote: (state, {payload}) => {
      state.trashNotes = state.trashNotes.filter(({id}) => id !== payload.id) 
      state.mainNotes.push(payload);
    },
    deleteNote: (state, {payload}) => {
      state.trashNotes = state.trashNotes.filter(({id}) => id !== payload.id) 
    },
    setPinndedNotes: (state, {payload}) => {
      state.mainNotes = state.mainNotes.map((note) => 
        note.id === payload.id ? { ...note, isPinned: !note.isPinned} : note
      )
    },         
    setEditNote: (state, {payload}) => {
      state.editNote = payload;
    },        
    readNote: (state, {payload}) => {
      const { type, id } = payload;
      const setRead = (notes: noteType) => {
        state[notes] = state[notes].map((note: Note) => 
          note.id === id ? { ...note, isRead: !note.isRead } : note
        )
      }
      if(type === "archive") {
        setRead(noteType.archiveNotes);
      } else if(type === "trash") {
        setRead(noteType.trashNotes);
      } else {
        setRead(noteType.mainNotes);
      }
    },                         
    removeTags: (state, { payload }) => {
      state.mainNotes = state.mainNotes.map((note) => ({
        ...note,
        tags: note.tags.filter(({tag}) => tag !== payload.tag)
      }))
    }
  }
})

export const { setMainNotes, setTrashNotes, setArchiveNotes, unArchiveNote, restoreNote, deleteNote, setPinndedNotes, setEditNote, readNote, removeTags } = notesListSlice.actions;
export default notesListSlice.reducer;