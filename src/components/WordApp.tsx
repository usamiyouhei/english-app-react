"use client"
import { useState, useEffect } from "react";
import WordDisplay from "../components/WordDisplay";
import WordButtons from "../components/WordButtons";
import WordForm from "../components/WordForm";
import LearnedList from "../components/LearnedList";
import { Word } from "../app/types/Word";
import wordData from "../app/data/word_data_unique.json";
import SlideMenu from "./SlideMenu";
import ProgressBar from "./ProgressBar";
import { basicWords } from "@/app/data/basicWords";
import { idiomsWords } from "../app/data/idiomsWords";
import { intermediateWords } from "../app/data/intermediateWords";

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
  const [showAllLearned, setShowAllLearned] = useState(false)
  const [category, setCategory] = useState("basic");

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
  const displayWords = showAllLearned ? learnedWords : learnedWords.slice(0, 5)

  // カテゴリー選択
  const changeCategory = ( newCategory: string) => {
      setCategory(newCategory)
      switch(newCategory) {
      case "basic":
        setWords(basicWords);
        break;
      case "intermediate":
        setWords(intermediateWords);
        break;
      case "idioms":
        setWords(idiomsWords);
        break;

      }
      setCurrentIndex(0);
      setShowMeaning(false)
  }

  const learnedCount = words.filter(word => word.isLearned).length;
  const totalCount = words.length;
  const progress = Math.round((learnedCount / totalCount) * 100)
  return(
    <div className="relative p-4">
      <SlideMenu currentCategory={category} onSelect={changeCategory}></SlideMenu>

    <div>
      <h1 className="text-4xl font-bold text-center mt-10">English Word App</h1>
      <WordDisplay word={words[currentIndex]} showMeaning={showMeaning}></WordDisplay>
      <ProgressBar 
        current={words.filter((w) => w.isLearned).length}
        total={words.length}
        label="このカテゴリの達成度"
        />
      <WordButtons 
        setShowMeaning={setShowMeaning} 
        prevWord={prevWord}
        nextWord={nextWord}
        randomWord={randomWord}
        resetWord={resetWord}
        toggleLearned={toggleLearned}
        ></WordButtons>
      <WordForm addWord={addWord}></WordForm>

      <LearnedList learnedWords={displayWords}></LearnedList>
      { learnedWords.length > 10 && (
        <div className=" text-center mt-4">
          <button
          onClick={() => setShowAllLearned(!showAllLearned)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
          { showAllLearned ? "閉じる" : "もっと見る"}
          </button>
        </div>
      ) }
    </div>
     </div>
  )
}