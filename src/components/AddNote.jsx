import React, { useState } from "react";

import Button from "./Button";

import "./AddNote.css";

const AddNote = ({ handleNoteAddition }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleInputContent = (e) => {
    setContent(e.target.value);
  };

  const handleAddNoteClick = () => {
    const note = { title, content };
    handleNoteAddition(note);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <div className="add-note-container">
        <input
          placeholder="Título"
          onChange={handleInputTitle}
          value={title}
          className="add-note-input"
          type="text"
        />
        <div className="add-note-button-container">
          <Button onClick={handleAddNoteClick}>Adicionar</Button>
        </div>
      </div>
      <div className="add-note-container">
        <input
          placeholder="Conteúdo"
          onChange={handleInputContent}
          value={content}
          className="add-note-input"
          type="text"
        />
      </div>
    </>
  );
};

export default AddNote;
