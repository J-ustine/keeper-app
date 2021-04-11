import React from "react";
import "./App.css";

export default function Note(props) {
  return (
    <div>
      {props.data.map(function (data, index) {
        return (
          <div className="note">
            <div key={index}>
              <h1>{data.title}</h1>
              <p>{data.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
