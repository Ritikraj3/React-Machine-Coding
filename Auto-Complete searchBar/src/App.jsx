import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});
  const fetchData = async () => {
    if (cache[input]) {
      console.log("CACHE RETURNED", input);
      setResults(cache[input]);
      return;
    }
    console.log("API CALL", input);
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setResults(json?.recipes);
    setCache((prev) => ({ ...prev, [input]: json?.recipes }));
  };

  useEffect(() => {
    if (!input.trim()) return;
    const timer = setTimeout(fetchData, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="App">
      <h1>Auto-complete SearchBar</h1>
      <div>
        <input
          type="text"
          className="search-input"
          value={input}
          onBlur={() => setShowResults(false)}
          onFocus={() => setShowResults(true)}
          onChange={(e) => setInput(e.target.value)}
        />
        {showResults && (
          <div className="result-container">
            {results.map((r) => (
              <span
                onMouseDown={() => {
                  setInput(r.name);
                  setShowResults(false);
                }}
                className="result"
                key={r.id}
              >
                {" "}
                {r.name}{" "}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
