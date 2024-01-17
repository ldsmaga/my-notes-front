import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import NoteDetails from "./components/NoteDetails";

import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const { data } = await axios.get("http://localhost:8000/notes");

    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleNoteClick = (noteId) => {
    const newNotes = notes.map((note) => {
      if (note.id === noteId) return { ...note, completed: !note.completed };

      return note;
    });

    setNotes(newNotes);
  };

  const handleNoteAddition = async (note) => {
    await axios
      .post("http://localhost:8000/notes", note)
      .then(() => {
        fetchNotes();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleNoteDeletion = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId);

    setNotes(newNotes);
  };

  const teste = { a: "aee", b: "ok" };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddNote handleNoteAddition={handleNoteAddition} />
              <Notes
                notes={notes}
                handleNoteClick={handleNoteClick}
                handleNoteDeletion={handleNoteDeletion}
              />
            </>
          )}
        />
        <Route path="/:noteTitle" exact component={NoteDetails(teste)} />
      </div>
    </Router>
  );
};

export default App;
