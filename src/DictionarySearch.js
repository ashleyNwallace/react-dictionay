import React, { useState } from "react";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
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
        <div className="col-2 ">
          <input
            type="submit"
            value="search"
            className="btn btn-primary search-button"
          />
        </div>
      </form>
    </div>
  );
}
