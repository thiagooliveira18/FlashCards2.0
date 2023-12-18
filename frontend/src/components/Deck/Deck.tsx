import Link from "next/link";

type PropsDeck = {
    id: string,
    titulo: string,
    cartas: string
}

export default function Deck({titulo, cartas, id}: PropsDeck){
    return(
        <div className="w-72 h-60 flex flex-col items-center justify-center bg-white hover:bg-stone-100 border border-black rounded-3xl">
            <div className="w-full h-3/5 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">{titulo}</h1>
                <h2 className="text-lg">{cartas} cartas</h2>
            </div>
            <div className="w-full h-[30%] flex items-center justify-center">
                <Link
                    href={`/deck/${id}`} 
                    className="w-16 h-16 flex items-center justify-center bg-green-500 hover:bg-green-600 border-2 border-stone-400 rounded-3xl text-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                </Link>
            </div>
        </div>
    );
}