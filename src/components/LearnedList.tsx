import { Word } from "../app/types/Word";

type Props = {
  learnedWords: Word[];
}

export default function LearnedList ({ learnedWords }: Props){
  return(
    <div className="mt-8 w-60 mx-auto">
        <h2 className="text-lg font-bold text-gray-600 mb-2 text-center">学習済みリスト</h2>
        <ul className="bg-white rounded-xl shadow-md p-4">
          { learnedWords.length === 0 && (<li className="text-gray-400">まだありません</li>)}
          { learnedWords.map((word, index) => (
          <li key={index} className="flex justify-between py-1">
            <span>{word.english}</span>
            <span className="text-sm text-gray-500">{word.japanese}</span>
          </li>
              ))}
        </ul>
      </div>
  )

}