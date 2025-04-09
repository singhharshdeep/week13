import React, { useState } from "react";
import axios from 'axios';

function FetchWordDefinition() {
  const [word, setWord] = useState("digital");
  const [definition, setDefinition] = useState("");

  const fetchDefinition = async () => {
    // Fetch from this api
    try {
      const jsonData = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const meanings = jsonData.data[0].meanings
        .map((meaning) => meaning.definitions[0].definition)
        .join("; ");
      setDefinition(meanings);
    } catch (e) {
      console.log(e)
    }
    // Only once you have a response
    // .then(
    //   // Execute this function with the response you get
    //   (genericResponse) => {
    //     console.log("Returning json response");
    //     // Convert it to json
    //     return genericResponse.json();
    //   }
    // )
    // Once we receive the json
    // .then(
    //   // We execute this function, where data represents the json we receive
    //   (data) => {
    //     const meanings = data[0].meanings
    //       .map((meaning) => meaning.definitions[0].definition)
    //       .join("; ");
    //     setDefinition(meanings);
    //   }
    // )
    // .catch((error) => console.error("Error fetching definition:", error));

    // Do not wait for the response, execute it right away
    console.log("Random task to be done after the api");
  };

  return (
    <div>
      <h1>Redeploying the app</h1>
      <h2>Word Definition Updated</h2>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={fetchDefinition}>Fetch Definition</button>
      {definition ? <p>{definition}</p> : <p>Loading...</p>}
    </div>
  );
}

export default FetchWordDefinition;
