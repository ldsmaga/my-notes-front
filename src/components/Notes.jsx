import React from "react";

import Note from "./Note";

const Notes = ({ notes, handleNoteClick, handleNoteDeletion }) => {
  return (
    <>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleNoteClick={handleNoteClick}
          handleNoteDeletion={handleNoteDeletion}
        />
      ))}
    </>
  );
};

export default Notes;
