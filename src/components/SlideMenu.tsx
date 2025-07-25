"use client"
import { useState } from "react";
import { FaBars, FaTimes  } from "react-icons/fa";

type Props = {
  currentCategory: string;
  onSelect: (category: string) => void;
}

export default function SlideMenu({ currentCategory, onSelect} : Props){
  const [ isOpen, setIsOpen] = useState(false);

  const categories = ["basic", "intermediate", "idioms"]

  return(
     <div>
      {/* hamburgar menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded shadow"
      >
        { isOpen ? <FaTimes size={24}/> : <FaBars size={24} />}
        {/* <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black mb-1"></div> */}
      </button>

      {/* スライドメニュー */}
      <div
        className={`fixed top-0 left-0 h-full w-48 bg-white shadow-lg transform ${ 
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}>
        <div className="p-4">
          <h2 className="font-bold mb-4 mt-10">カテゴリー</h2>
          {categories.map((cat) => (

          <button
              key={cat}
              onClick={() => {
                onSelect(cat)
                setIsOpen(false)
              }}
              className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-100 ${
                cat === currentCategory ? "bg-blue-100" : ""
              }`}
              >
              {cat}
          </button>
            ))}
          </div>
        </div>
      </div>

  )

}