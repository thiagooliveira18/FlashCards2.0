export default function BotaoAddDeck(){
    return (
        <button className="group flex flex-row items-center justify-center w-44 h-1/2 hover:h-[55%] hover:w-48 border-2 border-zinc-300 rounded-3xl bg-white">
            <div className="w-10 h-10 group-hover:w-11 group-hover:h-11 rounded-3xl flex items-center justify-center border-2 border-zinc-500 text-white bg-green-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus group-hover:w-7 group-hover:h-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
            </div>
            <h1 className="text-zinc-400 font-bold text-lg group-hover:text-xl group-hover:text-zinc-500">Novo Deck</h1>
        </button>
    );
}