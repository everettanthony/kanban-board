"use client";
import { useEffect, useState } from "react";
import { DEFAULT_CARDS } from "@/data/data";
import BurnBarrel from "@/components/BurnBarrel";
import Column from "@/components/Column";

export default function Board() {
    const [cards, setCards] = useState(DEFAULT_CARDS);

    // Persist data using localStorage
    //
    // const [cards, setCards] = useState([]);
    // const [hasChecked, setHasChecked] = useState(false);

    // useEffect(() => {
    //     hasChecked && localStorage.setItem('cards', JSON.stringify(cards));
    // }, [cards, hasChecked]);

    // useEffect(() => {
    //     const cardData = localStorage.getItem('cards');

    //     setCards(cardData ? JSON.parse(cardData) : []);

    //     setHasChecked(true);
    // }, []);

    return (
        <div className="flex h-full w-full justify-center gap-4 overflow-auto p-12">
            <Column 
                title="Backlog"
                column="backlog"
                headingColor="text-neutral-500"
                cards={cards}
                setCards={setCards}
            />
            <Column 
                title="TODO"
                column="todo"
                headingColor="text-yellow-200"
                cards={cards}
                setCards={setCards}
            />
            <Column 
                title="In Progress"
                column="doing"
                headingColor="text-blue-200"
                cards={cards}
                setCards={setCards}
            />
            <Column 
                title="Complete"
                column="done"
                headingColor="text-emerald-200"
                cards={cards}
                setCards={setCards}
            />
            <BurnBarrel setCards={setCards} />               
        </div>
    )
}