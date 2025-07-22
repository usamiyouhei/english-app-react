// import { Word } from "../app/types/Word";

type Props = {
  nextWord: () => void;
  prevWord: () => void;
  randomWord: () => void;
  resetWord: () => void;
  toggleLearned: () => void;
  setShowMeaning: (value: boolean) => void;
}
export default function WordButtons({ setShowMeaning, nextWord, prevWord, randomWord, resetWord, toggleLearned} : Props) {
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
        onClick={() => setShowMeaning(true)}
        className="transition transform active:scale-95 px-4 py-2 rounded-2xl shadow-md bg-blue-500 text-white hover:bg-blue-600 transition"
      >意味を表示</button>
      <button
        onClick={toggleLearned}
        className="transition transform active:scale-95 px-4 py-2 rounded-2xl shadow-md bg-green-500 text-white hover:bg-green-600 transition">
          ✅ 学習済み
      </button>
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