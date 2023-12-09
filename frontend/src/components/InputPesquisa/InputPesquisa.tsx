export default function InputPesquisa() {
    return (
        <div className="flex items-center justify-center w-60 h-12 rounded-3xl border-2 border-zinc-300 bg-green-500 ">
            <div className="flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            </div>
            <input type="search" placeholder="Pesquise aqui..." className="h-7 w-48 px-2 bg-green-500 text-white placeholder:text-slate-50 placeholder:text-opacity-50 placeholder:font-bold focus:outline-none" />
        </div>
    );
}