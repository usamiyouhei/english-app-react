"use client"
import { useState } from "react";
import WordDisplay from "../components/WordDisplay";
import WordButtons from "../components/WordButtons";
import WordForm from "../components/WordForm";
import { Word } from "../app/types/Word";


export default function WordApp() {
  const [words, SetWords] = useState<Word[]>([
    { english:"apple" , japanese:"りんご"},
    { english:"banana" , japanese:"バナナ"},
    { english:"coffee" , japanese:"コーヒー"},
    { english:"tea" , japanese:"お茶"},
  ])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMeaning, setShowMeaning] = useState(false)

  const nextWord = () => {
    setCurrentIndex((currentIndex + 1) % words.length)
    setShowMeaning(false)
  }

  const addWord = (newWord: Word) => {
     SetWords([...words, newWord])
  }

  return(
    <div>
      <h1>English Word App</h1>
      <WordDisplay word={words[currentIndex]} showMeaning={showMeaning}></WordDisplay>
      <WordButtons setShowMeaning={setShowMeaning} nextWord={nextWord}></WordButtons>
      <WordForm addWord={addWord}></WordForm>
    </div>
  )
}