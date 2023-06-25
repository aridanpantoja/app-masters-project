"use client"
import { useState } from "react";
import { Search } from 'lucide-react'

export default function SearchBar({ data, filterGames }) {
    const [search, setSearch] = useState('')

    function changeValue(e, filteredGames) {
        if (e.target.value === "") {
            setSearch("")
            filterGames(data)
        } else {
            setSearch(e.target.value)
            filterGames(filteredGames)
        }
    }

    const lowerBusca = search.toLowerCase()
    const filteredGames = data.filter((game) => game.title.toLowerCase().startsWith(lowerBusca))

    return (
        
        <div className="flex gap-2 pr-4 items-center overflow-hidden border-none outline-none text-sm md:text-xl rounded-lg bg-light-purple">
            <input 
                className="w-full h-full pl-4 outline-none bg-light-purple placeholder:text-white-fb" 
                type="text" 
                placeholder="Pesquisar jogos"
                value={search}
                onChange={(e) => changeValue(e, filteredGames)}
                maxLength={32}
            />

            <Search size={24} className="text-black/50"/>
        </div>
    )
}