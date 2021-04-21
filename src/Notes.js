import React from "react";

export default function Notes(props) {
  function handledelete() {
    props.deleteNote(props.id);
  }
  return (
    <div className="note" key={props.key}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handledelete}>DELETE</button>
    </div>
  );
}
