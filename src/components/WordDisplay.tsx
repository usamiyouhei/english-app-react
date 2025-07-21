import { Word } from "../app/types/Word";
import { motion } from "framer-motion";

type Props = {
  word: Word;
  showMeaning: boolean;
}
export default function WordDisplay({word, showMeaning}: Props){

    return(
      <motion.div 
        key={word.english}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center mt-10"
        >
        <h1
          className="text-4xl font-bold text-gray-800 "
        >
          {word.english}
        </h1>
        { showMeaning && <p className="mt-4 text-xl text-gray-500">{word.japanese}</p>}
        
        

      </motion.div>
    )
}