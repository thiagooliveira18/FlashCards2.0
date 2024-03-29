import Image from "next/image";
import avatar from "../../../../public/avatar_01.png";

export default function BotaoProfile(){
    return(
        <div className="flex flex-row items-center justify-start px-2 md:w-1/4 w-64 h-2/3 bg-white rounded-2xl border-2 border-gray-300">
            <Image src={avatar} alt="Profile Image" className="w-12 border-2 border-zinc-400 rounded-3xl" />
            <h1 className="md:ml-3 ml-5 text-xs text-zinc-600 font-bold">Thiago Oliveira dos Santos</h1> {/*26 caracteres*/}
        </div>
    );
}
