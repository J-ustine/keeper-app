import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import NewNote from "./NewNote";
import Notes from "./Notes";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="App">
      <Header />
      <NewNote addNote={addNote} />
      {notes.map((newNotes, index) => {
        return (
          <Notes
            title={newNotes.title}
            content={newNotes.content}
            key={index}
            id={index}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
