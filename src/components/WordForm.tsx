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
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex flex-wrap justify-center gap-4"
    >
      <input
        type="text"
        placeholder="English"
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
        className="border rounded-xl px-4 py-2 w-60 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      <input
        type="text"
        placeholder="Japanese"
        value={japanese}
        onChange={(e) => setJapanese(e.target.value)}
        className="border rounded-xl px-4 py-2 w-60 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-blue-600 transition"
        >単語を追加</button>
    </form>
  )
}