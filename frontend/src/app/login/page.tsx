import userImg from '../../../public/user.svg';
import keyImg from '../../../public/key.svg';
import Image from "next/image";
import Link from 'next/link';

export default function Login(){
    return (
        <main className="w-screen h-screen flex items-center justify-center bg-sky-200">
            <div className="w-11/12 h-3/4 md:w-1/3 md:h-4/5 flex flex-col items-center border-zinc-500 border-2 rounded-xl bg-gradient-to-t from-blue-950 via-blue-800 to-blue-700 shadow-3xl">
                <div className="w-full h-1/4 flex items-center justify-center mt-10">
                    <h1 className="text-3xl font-bold text-white stroke-black stroke-2">Login</h1>
                </div>
                <form className="flex flex-col items-center w-full gap-8">
                    <div className="w-2/3 h-16 md:h-14 flex flex-row items-center rounded-2xl overflow-hidden bg-white">
                        <div className="h-full px-2 flex items-center justify-center">
                            <Image src={userImg} alt='Usuário' />
                        </div>
                        <input type="text" placeholder='Usuário' className="w-full h-full px-2" />
                    </div>
                    <div className="w-2/3 h-16 md:h-14 flex flex-row items-center rounded-2xl overflow-hidden bg-white">
                        <div className="h-full px-2 flex items-center justify-center">
                            <Image src={keyImg} alt="Senha" className="w-7" />
                        </div>
                        <input type="password" placeholder='Senha' className="w-full h-full px-2" />
                    </div>
                    <button type="submit" className="w-2/3 h-20 md:w-3/5 rounded-2xl border-2 text-white font-bold text-lg border-black bg-gradient-to-bl from-cyan-500 via-blue-700 to-blue-950 hover:bg-3th">Entrar</button>
                </form>
                <Link href="/signup" className="text-white mt-4 hover:text-cyan-500 text-bold">Cadastre-se aqui!</Link>
            </div>
        </main>
    );
}