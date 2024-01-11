import BasePages from "@/components/BasePages/BasePages";

export default function Cards(){
    return(
        <BasePages>
            <div className="w-full h-full flex flex-col items-center gap-5">
                <div className="w-3/4 h-[30%] bg-white p-2 flex flex-col items-center justify-center border-[3px] border-black rounded-3xl shadow-2xl">
                    <h1 className="text-3xl font-bold">Inglês intermediário</h1>
                    <h2 className="text-lg">cartas: 52</h2>
                    <h2 className="text-lg">criado por: Thiago Oliveira</h2>
                    <div className="flex flex-row w-1/2 h-full items-center justify-between">
                        <button className="flex flex-row w-2/5 h-full items-center justify-center bg-gradient-to-t from-3th to-secundary transition duration-400 ease-in-out hover:bg-gradient-to-t hover:from-black hover:to-secundary border-2 border-black rounded-full text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
                        </button>
                        <button className="flex flex-row w-2/5 h-full items-center justify-center transition duration-100 ease-in-out bg-gradient-to-t from-3th to-secundary border-2 border-black rounded-full text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" strokeWidth="0" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-[95%] h-full flex flex-col items-center justify-center bg-white border-[3px] border-black rounded-3xl p-4 shadow-2xl">
                    <div className="w-full h-[75%] flex flex-row items-center justify-center">
                        <div className="h-full w-1/2 flex flex-col items-center justify-center border-r-2 border-stone-500">
                            <h1 className="font-bold text-3xl">pergunta</h1>
                        </div>
                        <div className="h-full w-1/2 flex flex-col items-center justify-center">
                            <h1 className="font-bold text-3xl">resposta</h1>
                        </div>
                    </div>
                    <div className="w-full h-[25%] flex flex-row items-center justify-center gap-10">
                        <button className="w-52 h-[80%] border-2 border-black rounded-3xl bg-gradient-to-t from-3th to-secundary">
                            <span className="text-white font-bold">Revelar</span>
                        </button>
                        <button className="w-52 h-[80%] border-2 border-black rounded-3xl bg-gradient-to-t from-3th to-secundary">
                            <span className="text-white font-bold">Proximo</span>
                        </button>
                    </div>
                </div>
            </div>
        </BasePages>
    );
}