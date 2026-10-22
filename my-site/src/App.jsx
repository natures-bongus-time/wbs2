import { useState, useEffect } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import howtouse from "./components/howtouse"

const chapters = [Hero, About, howtouse];

export default function App() {
  const [step, setStep] = useState(0);
  const finished = step === chapters.length - 1;
 
  return (
    <main>
      {chapters.slice(0, step + 1).map((Chapter, i) => (
        <Chapter key={i} />
      ))}
 
      {!finished && (
        <button onClick={() => setStep(step + 1)}>keep going →</button>
      )}
    </main>
  );
}


