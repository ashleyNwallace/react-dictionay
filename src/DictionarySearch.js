import React, { useState } from "react";
import axios from "axios";
import Definition from "./Defintion";

export default function DictionarySearch() {
  const [keyword, setKeyword] = useState("");
  const [wordSearched, setWordSearched] = useState("");
  const [phonetics, setPhonetics] = useState("");
  const [partOfSpeech, setPartOfSpeech] = useState("");
  const [definition, setDefinition] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
    setWordSearched(response.data[0].word);
    setPhonetics(response.data[0].phonetic);
    setPartOfSpeech(response.data[0].meanings[0].partOfSpeech);
    setDefinition(response.data[0].meanings[0].definitions[0].definition);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <h1>What word would you like to search for? 🕵🏻‍♂️</h1>
      <form onSubmit={search}>
        <div className="col-5 ">
          <input
            type="text"
            placeholder="enter a word..."
            className="form-control"
            onChange={handleKeywordChange}
          />
        </div>
      </form>
      <Definition
        word={wordSearched}
        phonetics={phonetics}
        meaning={partOfSpeech}
        definition={definition}
      />
    </div>
  );
}
