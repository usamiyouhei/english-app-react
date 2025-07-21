import { Word } from "../app/types/Word";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

type Props = {
  word: Word;
  showMeaning: boolean;
}
export default function WordDisplay({word, showMeaning}: Props){

    return(
      <div>
      <motion.div 
        // key={word.english + (word.isLearned ? "-learned" : "")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`bg-white rounded-2xl shadow-xl p-8 w-80 h-40 mx-auto text-center mt-10 relative
                    ${word.isLearned ? "opacity-60" : ""}`}
        >
          <div className="relative flex justify-center">
        <h1
          className="text-4xl font-bold text-gray-800"
        >
          {word.english}
            </h1>
          {word.isLearned && (
        <CheckCircle className="absolute -top-2 -right-4 text-green-500 w-6 h-6"/>
      )}
      
          </div>

        <AnimatePresence>
        { showMeaning && (
          <motion.p 
            key="meaning"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-xl text-gray-500"
          >
           {word.japanese}
          </motion.p>
      )}
        
        </AnimatePresence>
      

      </motion.div>
      </div>
    )
}