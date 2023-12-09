import Image from "next/image";
import avatar from "../../../public/avatar_01.png";

export default function BotaoProfile(){
    return(
        <button className="flex flex-row items-center justify-start px-2 w-1/4 h-4/5 bg-white rounded-2xl border-2 border-gray-300">
            <Image src={avatar} alt="Profile Image" className="w-12 border-2 border-zinc-400 rounded-3xl" />
            <h1 className="ml-3 text-lg text-zinc-600 font-bold">Thiago Oliveira</h1>
        </button>
    );
}
