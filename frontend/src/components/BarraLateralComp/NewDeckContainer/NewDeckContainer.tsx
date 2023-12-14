export default function NewDeckContainer() {
    return(
        <button className="group border-dashed border-2 border-green-500 rounded-xl w-3/4 h-3/4 hover:scale-105 overflow-hidden">
            <div className="w-full h-full bg-zinc-400 bg-opacity-20">
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <h1 className="w-8 h-8 border border-zinc-200 bg-green-500 text-2xl text-white flex items-center justify-center rounded-3xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                    </h1>
                    <h2 className="py-1 text-white">Crie um novo Deck</h2>
                </div>
            </div>
        </button>
    );
}