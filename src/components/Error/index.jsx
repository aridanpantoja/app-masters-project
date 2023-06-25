import Image from "next/image"

export default function Error({ children }) {
    return (
        <div className="flex flex-col justify-center items-center gap-6 w-full mt-12 min-h-tela">
            <Image src={'/images/error.png'} width={324} height={254} alt="Ilustração de erro"/>
            <div className="text-center">
                <h3 className="text-light-green text-5xl  mobile:text-8xl font-bold">ERRO</h3>
                <div className="mt-4 text-xl mobile:text-2xl text-white-fb break-keep">
                    {children}
                </div>
            </div>
        </div>
    )
} 