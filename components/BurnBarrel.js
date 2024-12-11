"use client";
import { useState } from "react";
import { FaFire } from "react-icons/fa";
import { FiPlus, FiTrash } from "react-icons/fi";

export default function BurnBarrel({ setCards }) {
    const [active, setActive] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setActive(true);
    };

    const handleDragLeave = () => {
         setActive(false);
    };  

    const handleDragEnd = (e) => {
        const cardId = e.dataTransfer.getData('cardId');

        setCards((prev) => prev.filter((c) => c.id !== cardId));

        setActive(false);
   }; 

    return (
        <div 
            onDrop={handleDragEnd}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`mg-10 grid h-72 w-72 shrink-0
            place-content-center rounded border text-3xl 
            ${active 
                ? "border-red-800 bg-red-800/20 text-red-500"
                : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
            }`}>
            {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
        </div>
    )
}