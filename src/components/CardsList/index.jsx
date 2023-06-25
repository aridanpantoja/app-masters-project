"use client"
import { useState } from "react";
import SearchBar from "../SearchBar";
import DropDown from "../DropDown";
import Card from "../Card";
import Error from "../Error";

export default function CardsList({ data }) {
    
    const [games, setGames] = useState(data)
    
    function filterGames(games) {
        setGames(games)
    }
    
    const visible = games.length ? 
        <ul className="grid mobile:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 py-8 lg:py-0">
            {games.map((game, index) => <Card key={index} data={game}/>)}
        </ul> : <Error>Jogo não encontrado! Tente outro nome</Error>
    
    return (
        <div className="min-h-tela flex flex-col w-full py-6 md:py-12 gap-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full h-12 md:h-16 text-white-fb">
                <h2 className="font-bold text-2xl mobile:text-3xl border-b-2 border-light-green pb-1 mobile:pb-2">Confira os jogos</h2>
                <div className="flex gap-2">
                    <SearchBar data={data} filterGames={filterGames} />
                    <DropDown data={data} filterGames={filterGames} />
                </div>
            </div>

            {visible}
        </div>
    )
}