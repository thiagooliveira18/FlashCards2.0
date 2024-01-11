import BasePages from "@/components/BasePages/BasePages";
import Image from "next/image";
import Link from "next/link";

import Avatar from "../../../public/avatar_01.png";

export default function Profile(){
    return (
        <BasePages>
            <div className="w-full h-full flex flex-col bg-white rounded-3xl">
                <div className="w-full py-4 flex flex-row items-center justify-center gap-5">
                    <div className="w-20 h-20 border-2 border-black rounded-full">
                        <Image src={Avatar} alt="Foto de perfil" />
                    </div>
                    <div className="flex flex-row items-center justify-between w-4/5 h-16 text-white bg-gradient-to-t from-3th to-secundary border-2 border-black rounded-full overflow-hidden">
                        <h1 className="text-2xl font-bold ps-7">Thiago Oliveira</h1>
                        <button className="h-full w-20 flex items-center justify-center hover:bg-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center w-[90%] h-16 text-white bg-gradient-to-t from-3th to-secundary border-2 border-black rounded-full overflow-hidden">
                        <h1 className="font-bold text-2xl">Email:</h1>
                        <h1 className="font-bold text-2xl ps-4">thiago@gmail.com</h1>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center w-48 h-48 mt-14 bg-gradient-to-b from-3th to-green-600 border-[3px] border-black rounded-3xl">
                        <h1 className="text-3xl text-white">6</h1>
                        <h1 className="text-2xl font-bold text-white">Decks</h1>
                        <button className="flex items-center justify-center w-10 h-10  border-2 border-white rounded-3xl text-white transition duration-300 ease-in-out hover:text-black hover:border-black hover:bg-stone-400 hover:bg-opacity-40">
                            <Link href='../mydecks/'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </BasePages>
    );
}