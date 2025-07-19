import { Word } from "../app/types/Word";
import { useState } from "react";

type Props = {
  addWord: (word: Word) => void;
}

export default function WordForm ({addWord}: Props) {
  const [english, setEnglish] = useState("");
  const [japanese, setJapanese] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
    if(english && japanese) {
      addWord({ english, japanese })
      setEnglish("");
      setJapanese("");
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="English" 
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
        />
      <input 
        type="text" 
        placeholder="Japanese"
        value={japanese}
        onChange={(e) => setJapanese(e.target.value)}/>
      <button>単語を追加</button>
    </form>
  )
}