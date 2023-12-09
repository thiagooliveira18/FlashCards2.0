export default function BotaoSair() {
    return(
        <button className="text-white flex flex-row items-center justify-center md:w-2/3 md:h-2/3 rounded-xl border-2 border-black bg-gradient-to-tr from-blue-600 via-blue-800 to-blue-950">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
        </button>
    );
}