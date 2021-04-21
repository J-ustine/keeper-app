/* eslint-disable no-unused-expressions */
import React, { useState } from "react";

export default function NewNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function addNote(event) {
    event.preventDefault();
    props.addNote(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={note.title}
          autoComplete="off"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Take a note"
          value={note.content}
          name="content"
          autoComplete="off"
          onChange={handleChange}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}
