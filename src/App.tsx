import { useState } from "react";
import { scenes } from "./story/scenes";

//APpp funksjonen holder styr på hvilken scene som er aktiv for øyeblikket
//const scene henter riktig scene basert på brukerens valg
function App() {
  const [sceneId, setSceneId] = useState("start");
  const scene = scenes[sceneId];

  return (
    <main style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <p style={{ whiteSpace: "pre-line" }}>{scene.text}</p>

      <div>
        {scene.choices.map((choice) => (
          <button
            key={choice.text}
            onClick={() => setSceneId(choice.next)}
            style={{ display: "block", marginTop: 12 }}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </main>
  );
}

export default App;
