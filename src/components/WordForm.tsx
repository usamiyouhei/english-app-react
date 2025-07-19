import { Word } from "../app/types/Word";

export default function WordForm () {
  return (
    <form>
      <input type="text" placeholder="English"></input>
      <input type="text" placeholder="Japanese"></input>
      <button>単語を追加</button>
    </form>
  )
}