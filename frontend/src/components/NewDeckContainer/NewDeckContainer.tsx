export default function NewDeckContainer() {
    return(
        <button className="border-dashed border-2 border-green-500 rounded-xl w-3/4 h-3/4 overflow-hidden">
            <div className="w-full h-full bg-zinc-400 bg-opacity-20">
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <h1 className="w-8 h-8 border border-zinc-200 bg-green-500 text-2xl text-white flex items-center justify-center rounded-3xl">+</h1>
                    <h2 className="py-1 text-white">Crie um novo Deck</h2>
                </div>
            </div>
        </button>
    );
}