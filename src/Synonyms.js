import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    console.log(props.synonyms, "hello");
    return (
      <ul>
        {" "}
        <strong>Synonyms:</strong>
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
