export default function BotaoAddDeck(){
    return (
        <div className="flex flex-row items-center justify-center w-44 h-4/5 border-2 border-zinc-300 rounded-3xl bg-white">
            <div className="w-10 h-10 rounded-3xl flex items-center justify-center text-2xl border-2 border-zinc-500 text-white font-bold bg-green-500 mr-2">+</div>
            <h1 className="text-zinc-400 font-bold text-lg hover:text-zinc-500">Novo Deck</h1>
        </div>
    );
}