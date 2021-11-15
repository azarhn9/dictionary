import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <a
        className="PhoneticLink"
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
      >
        <div className="icon">🔊 {props.phonetic.text}</div>
      </a>
      
    </div>
  );
}