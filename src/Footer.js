import React from "react";
import "./App.css";

export default function Footer() {
  const date = new Date();
  let currentYear = date.getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}
