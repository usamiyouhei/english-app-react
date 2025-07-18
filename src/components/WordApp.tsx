"use client"
import { useState } from "react";
import WordDisplay from "../components/WordDisplay";
import WordButtons from "../components/WordButtons";
import WordForm from "../components/WordForm";
import { Word } from "../app/types/Word";


export default function WordApp() {
  const [word, SetWord] = useState<Word[]>([
    { english:"apple" , japanese:""},
    { english:"banana" , japanese:""},
    { english:"coffee" , japanese:""},
    { english:"tea" , japanese:""},
  ])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMeaning, setShowMeaning] = useState(false)

  return(
    <div>
      <h1>English Word App</h1>
      <WordDisplay></WordDisplay>
      <WordButtons></WordButtons>
      <WordForm></WordForm>
    </div>
  )
}