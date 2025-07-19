import { Word } from "../app/types/Word";

type Props = {
  nextWord: () => void;
  setShowMeaning: (value: boolean) => void;
}
export default function WordButtons({ setShowMeaning, nextWord} : Props) {
  return (
    <div>
      <button onClick={() => setShowMeaning(true)}>意味を表示</button>
      <button onClick={nextWord}>次の単語</button>
    </div>
  )
}