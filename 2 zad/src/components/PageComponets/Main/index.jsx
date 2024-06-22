import styles from "./styles.module.css";
import Header from "./Header/header";
import NoteList from "./NoteList/NoteList";
import Button from "../../UI/Button/Button";
import AddSVG from "../../Icons/addSVG";
import Modal from "../../UI/Modal/modal";
import WindowNote from "./WindowNote/windowNote";
import { useState, useRef } from "react";
import { useTodo } from "../../../context/TodoProvider";

const TEXTHEADER = {
  add: "New Note",
  edit: "Edit Note",
};

const SUBMITBTNTEXT = {
  add: "Apply",
  edit: "Edit",
};

const MainPage = () => {
  const [modeNote, setModeNote] = useState(null);
  const [noteInput, setNoteInput] = useState("");
  const editId = useRef();
  const { addTodo, editTodo } = useTodo();

  const editTodoFunc = (id, text) => {
    setModeNote("edit");
    setNoteInput(text);
    editId.current = id;
  };

  const onChangeNoteText = (value) => {
    setNoteInput(value);
  };

  const submitNote = () => {
    switch (modeNote) {
      case "add":
        addTodo(noteInput);

        break;
      case "edit":
        editTodo(editId.current, noteInput);
        break;
      default:
        break;
    }

    setModeNote(null);
  };
  return (
    <>
      <div className={`container ${styles.container}`}>
        <Header
          clickAdd={() => {
            setModeNote("add");
            setNoteInput("");
          }}
        />
        <NoteList editClick={editTodoFunc} />
      </div>

      <Button
        onClick={() => {
          setModeNote("add");
          setNoteInput("");
        }}
        className={styles.add}
      >
        <AddSVG />
      </Button>

      <Modal active={modeNote ? true : false}>
        {modeNote && (
          <WindowNote
            textHeader={TEXTHEADER[modeNote]}
            submitBtnText={SUBMITBTNTEXT[modeNote]}
            cancelClick={() => {
              setModeNote(null);
            }}
            submitClick={submitNote}
            valueText={noteInput}
            onChangeText={onChangeNoteText}
          />
        )}
      </Modal>
    </>
  );
};

export default MainPage;
