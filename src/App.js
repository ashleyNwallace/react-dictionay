import logo from "./logo.svg";
import "./App.css";
import DictionarySearch from "./DictionarySearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary Search </h1>
        </header>
        <main>
          <DictionarySearch />
        </main>
        <footer className="text-center">
          Coded by Ashley Wallace and is open-sourced on{" "}
          <a
            href="https://github.com/ashleyNwallace/react-dictionay"
            target="_blank"
          >
            Github
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
