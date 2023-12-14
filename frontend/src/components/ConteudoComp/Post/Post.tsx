export default function Post(){
    return(
        <button className="flex flex-col justify-between w-full h-44 p-6 mb-2 border border-black rounded-2xl bg-slate-50 hover:bg-slate-200">
            <div className="flex flex-col items-start">
                <h1 className="font-bold text-4xl">Inglês Intermediário</h1>
                <h2 className="mt-1 font-bold">Criado por: Thiago Oliveira</h2>
            </div>
            <h2 className="text-lg">Flash card com palavras em inglês de nível Intermediário para ajudar em estudos de idiomas.</h2>
            <h2 className="text-sm">13/12/2023 - 21:30</h2>
        </button>
    );
}