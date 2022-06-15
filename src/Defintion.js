import React, { useState } from "react";

export default function Definition(props) {
  return (
    <div className="meaning">
      <div className="wordSearched">
        <h1>{props.word}</h1>
        <h4>{props.phonetics}</h4>
      </div>
      <h3>{props.meaning}</h3>
      <div>
        <p>
          {" "}
          <strong>Definition:</strong>
          <br />
          {props.definition}
        </p>
      </div>
    </div>
  );
}
