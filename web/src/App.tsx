import { useEffect, useState } from 'react';
import { getWords } from './api/words/getWords'
import { shuffle } from './helpers/shuffle';
import type { Word } from './types/Word';
import './App.css'

function App() {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    const loadWords = async () => {
      const data = await getWords();
      setWords(shuffle(data));
    };

    loadWords();
  }, []);

  return (
    <>
      <section id="center">
        <h1>Words</h1>
        <table>
          <thead>
            <tr>
              <th>English</th>
              <th>Russian</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {words.map((word) => (
              <tr key={word.ID}>
                <td>{word.English}</td>
                <td>{word.Russian}</td>
                <td>{word.Difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default App
