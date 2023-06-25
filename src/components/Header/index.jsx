import { Gamepad2 } from "lucide-react";

export default function Header() {
    return (
        <header className="flex justify-center w-full h-16 bg-light-purple shadow-primary">
            <div className="flex gap-2 items-center text-white-fb">
                <Gamepad2 size={24}/>
                <h1 className="text-xl font-semibold">App Masters Games</h1>
            </div>
        </header>
    )
}