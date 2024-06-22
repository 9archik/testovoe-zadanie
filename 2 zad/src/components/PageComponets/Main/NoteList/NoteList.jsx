import AddSVG from "../../../Icons/addSVG.jsx";
import NoteItem from "./NoteItem/NoteItem.jsx";
import Button from "../../../UI/Button/Button.jsx";
import styles from "./style.module.css";
import Modal from "../../../UI/Modal/modal.jsx";
import WindowNote from "../WindowNote/windowNote.jsx";
import { useState } from "react";
import EmptyList from "./Empty/emptyList.jsx";
import { useTodo } from "../../../../context/TodoProvider.jsx";

const NoteList = ({ editClick }) => {
  const { todos, toggleComplete, deleteTodo } = useTodo();
  return (
    <>
      <div className={styles.container}>
        {todos.length > 0 ? (
          <>
            {todos.map((el) => {
              return (
                <NoteItem
                  text={el.text}
                  deleteClick={() => {
                    deleteTodo(el.id);
                  }}
                  editClick={() => {
                    if (typeof editClick === "function") {
                      editClick(el.id, el.text);
                    }
                  }}
                  completeClick={() => {
                    toggleComplete(el.id);
                  }}
                  complete={el.complete}
                  key={el.id}
                />
              );
            })}
          </>
        ) : (
          <EmptyList />
        )}
      </div>
    </>
  );
};

export default NoteList;
