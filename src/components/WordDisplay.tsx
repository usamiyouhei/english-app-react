import { Word } from "../app/types/Word";
import { motion } from "framer-motion";

type Props = {
  word: Word;
  showMeaning: boolean;
}
export default function WordDisplay({word, showMeaning}: Props){

    return(
      <div className="text-center mt-10">
        <h1
          className="text-4xl font-bold text-gray-800 "
        >
          {word.english}
        </h1>
        { showMeaning && <p className="mt-4 text-xl text-gray-500">{word.japanese}</p>}
        
        

      </div>
    )
}