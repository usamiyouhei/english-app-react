"use client"
import { useState, useEffect } from "react";
import WordDisplay from "../components/WordDisplay";
import WordButtons from "../components/WordButtons";
import WordForm from "../components/WordForm";
import LearnedList from "../components/LearnedList";
import { Word } from "../app/types/Word";
import wordData from "../app/data/word_data_300.json";

const STORAGE_KEY = "my-word-list";

export default function WordApp() {
  const defaultWords: Word[] = [
    { english:"apple" , japanese:"りんご"},
    { english:"banana" , japanese:"バナナ"},
    { english:"coffee" , japanese:"コーヒー"},
    { english:"tea" , japanese:"お茶"},
    ...wordData as Word[]
  ]

  const [words, setWords] = useState<Word[]>(defaultWords)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMeaning, setShowMeaning] = useState(false);

// localstrageから読み込み（初回のみ）
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if(saved) {
      setWords(JSON.parse(saved))
    } else {
    setWords(defaultWords)
  }
  }, [])

  // 単語リストが変わる度に保存
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(words))
  }, [words])

// 次の単語
  const nextWord = () => {
    setCurrentIndex((currentIndex + 1) % words.length)
    setShowMeaning(false)
  }

  // 前の単語
  const prevWord = () =>{
    setCurrentIndex((currentIndex - 1 + words.length) % words.length)
    setShowMeaning(false)
  }

  // 単語追加
  const addWord = (newWord: Word) => {
    setWords([...words, newWord])
  }

  // ランダム表示
  const randomWord = () => {
     const randomIndex = (Math.floor(Math.random() * words.length));
    setCurrentIndex(randomIndex);
    setShowMeaning(false);
  }

  // リセット
  const resetWord = () => {
    setCurrentIndex(0);
    setShowMeaning(false)
  }

  // チェック機能
  const toggleLearned = () => {
    const newWords = [...words]
    newWords[currentIndex].isLearned = !newWords[currentIndex].isLearned;
    setWords(newWords)
  }

  // チェック済みリスト表示
  const learnedWords = words.filter((word) => word.isLearned)

  return(
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">English Word App</h1>
      <WordDisplay word={words[currentIndex]} showMeaning={showMeaning}></WordDisplay>
      <WordButtons 
        setShowMeaning={setShowMeaning} 
        prevWord={prevWord}
        nextWord={nextWord}
        randomWord={randomWord}
        resetWord={resetWord}
        toggleLearned={toggleLearned}
        ></WordButtons>
      <WordForm addWord={addWord}></WordForm>

      <LearnedList learnedWords={learnedWords}></LearnedList>
    </div>
  )
}