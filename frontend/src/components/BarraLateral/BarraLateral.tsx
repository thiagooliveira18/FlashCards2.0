"use client";
import Image from 'next/image';
import InputPesquisa from '../InputPesquisa/InputPesquisa';
import NewDeckContainer from '../NewDeckContainer/NewDeckContainer';
import BotoesLateral from '../BotoesLateral/BotoesLateral';


export default function BarraLateral() {
    return (
        <div className="left-0 w-96 flex flex-col items-center justify-between border-r-2 border-zinc-400 shadow-r-shadow bg-gradient-to-t from-primary via-secundary to-3th absolute md:relative">
            <div className="h-32 w-full flex items-center justify-center">
                <InputPesquisa />
            </div>
            <div className="w-full h-2/3 flex items-center justify-center">
                <BotoesLateral />
            </div>
            <div className="h-36 w-full flex items-center justify-center">
                <NewDeckContainer />
            </div>
        </div>
    );
}