export default function Card({ data }) {
    return (
        <li className="overflow-hidden rounded-2xl bg-light-purple shadow-primary" key={data.id}>
            <img src={data.thumbnail} alt={data.title} className="w-full rounded-2xl"/>
            <div className="flex flex-col justify-center items-center gap-1 lg:gap-3 text-center p-4 lg:p-6">
                <h3 className="text-xl lg:text-2xl font-semibold text-white-fb">{data.title}</h3>
                <span className="text-xl font-medium text-light-green">{data.genre}</span>
            </div>
        </li>
    )
}