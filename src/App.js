import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import NewNote from "./NewNote";
import Notes from "./Notes";

export default function App() {
  const [notes, setNotes] = useState([]);

  console.log(notes);
  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
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
          />
        );
      })}
      <Footer />
    </div>
  );
}
