import React from "react";

export default function Notes(props) {
  function handleDelete(event) {
    console.log(event);
  }
  return (
    <div className="note" key={props.key}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}
