import useDimension from '@/hooks/useDimension/useDimension';

export default function BotaoHamb(){
    
    return(
        <button className="z-50 absolute w-12 h-12 flex flex-col gap-2 m-2 group">
            <div className="w-full h-2 rounded-xl border border-stone-300 bg-white"></div>
            <div className="w-full h-2 rounded-xl border border-stone-300 bg-white"></div>
            <div className="w-full h-2 rounded-xl border border-stone-300 bg-white"></div>
        </button>
    );
}