import { Word } from "../app/types/Word";

type Props = {
  word: Word;
  showMeaning: boolean;
}
export default function WordDisplay({word, showMeaning}: Props){

    return(
      <div>
        <p>{word.english}</p>
        { showMeaning && <p>{word.japanese}</p>}
        
        

      </div>
    )
}