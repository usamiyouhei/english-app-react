"use client"
import { useState } from "react";

type Props = {
  currentCategory: string;
  onSelect: (category: string) => void;
}

export default function SlideMenu({ currentCategory, onSelect} : Props){
  const [ isOpen, setIsOpen] = useState(false);

  return(
     <div>
      {/* hamburgar menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black mb-1"></div>
      </button>
     </div>

  )

}