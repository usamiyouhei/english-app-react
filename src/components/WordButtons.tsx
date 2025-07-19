import { Word } from "../app/types/Word";

type Props = {
  nextWord: () => void;

}
export default function WordButtons({nextWord} : Props) {
  return (
    <div>
      <button>意味を表示</button>
      <button onClick={nextWord}>次の単語</button>
    </div>
  )
}