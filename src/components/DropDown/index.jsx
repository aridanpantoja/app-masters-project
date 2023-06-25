export default function DropDown({ data, filterGames }) {    

    const genres = Array.from(new Set(data.map(game => game.genre)));

    function changeValue(value) {
        genres.forEach((item) => {
            if (item === value) { 
                const filteredGames = data.filter((game) => game.genre === value) 
                filterGames(filteredGames)
                
            } else if (value === "") {
                filterGames(data)
            }
        })
    }

    return (
        <div>
            <select onChange={(e) => changeValue(e.target.value)} className="w-full h-full border-none outline-none text-sm md:text-xl  rounded-lg bg-light-purple  p-2">
                <option value="" key="Todas">Todos</option>
                {
                    genres.map((item) => <option key={item}>{item}</option>)
                }
            </select>
        </div>
    )
}