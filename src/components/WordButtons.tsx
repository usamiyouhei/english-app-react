// import { Word } from "../app/types/Word";

import { Word } from "@/app/types/Word";

type Props = {
  word: Word
  nextWord: () => void;
  prevWord: () => void;
  randomWord: () => void;
  resetWord: () => void;
  toggleLearned: () => void;
  setShowMeaning: (value: boolean) => void;
  setShowExample: (value: boolean) => void;
  showMeaning: boolean;
  showExample: boolean;
}
export default function WordButtons({ word, setShowExample,setShowMeaning, nextWord, prevWord, randomWord, resetWord, toggleLearned, showMeaning,showExample} : Props) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-4">
      <div className="flex gap-2">
      <button 
        onClick={prevWord}
        className="transition transform active:scale-95 px-4 py-2 rounded-2xl shadow-md bg-gray-500 text-white hover:bg-gray-600 transition"
        >← 戻る</button>
      <button 
        onClick={nextWord}
        className="transition transform active:scale-95 px-4 py-2 rounded-2xl shadow-md bg-gray-500 text-white hover:bg-gray-600 transition">
          次へ →
      </button>
      </div>

      <div className="flex gap-2">
      
      <button
        onClick={toggleLearned}
        className="transition transform active:scale-95 px-4 py-2 rounded-2xl shadow-md bg-green-500 text-white hover:bg-green-600 transition">
          ✅ 学習済み
      </button>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mt-4">
        <button
          onClick={() => setShowMeaning(!showMeaning)}
          className="bg-blue-500 text-white px-4 py-2 rounded">
          { showMeaning ? "意味を隠す" : "意味を表示"}
        </button>
        {word.example && (
        <button
          onClick={() => setShowExample(!showExample)}
          className="bg-gray-500 text-white px-4 py-2 rounded">
          { showExample ? "例文を隠す" : "例文を表示"}
        </button>
        )}
      </div>

      <div className="flex gap-2">
        <button 
          onClick={randomWord}
          className="transition transform active:scale-95 px-4 py-2 rounded-2xl shadow-md bg-yellow-500 text-white hover:bg-yellow-600 transition">
            🎲 ランダム
        </button>
        <button 
          onClick={resetWord}
          className="transition transform active:scale-95 px-4 py-2 rounded-2xl shadow-md bg-red-500 text-white hover:bg-red-600 transition">
            🔄 リセット
        </button>
      </div>
    </div>
  )
}