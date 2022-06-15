import React, { useState } from "react";

export default function Definition(props) {
  return (
    <div className="meaning">
      <div className="wordSearched">
        <h1>{props.word}</h1>
        <h4>{props.phonetics}</h4>
      </div>
      <div>
        <h3>{props.meaning}</h3>
        <p> {props.definition}</p>
      </div>
    </div>
  );
}
