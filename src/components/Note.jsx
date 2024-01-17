import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Note.css";

const Note = ({ note, handleNoteClick, handleNoteDeletion }) => {
  const history = useHistory();

  const handleNoteDetailsClick = () => {
    history.push(`/${note.title}`);
  };

  return (
    <div
      className="note-container"
      style={note.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="note-title" onClick={() => handleNoteClick(note.id)}>
        {note.title}
      </div>

      <div className="buttons-container">
        <button
          className="remove-note-button"
          onClick={() => handleNoteDeletion(note.id)}
        >
          <CgClose />
        </button>
        <button
          className="see-note-details-button"
          onClick={handleNoteDetailsClick}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Note;
