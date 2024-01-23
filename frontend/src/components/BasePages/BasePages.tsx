"use client";
import useDimension from "@/hooks/useDimension/useDimension";
import BarraLateral from "../BarraLateralComp/BarraLateral/BarraLateral";
import Header from "../HeaderComp/Header/Header";
import BotaoHamb from "../BarraLateralComp/BotaoHamburguer/Botao";
import { useEffect, useState } from "react";



export default function BasePages({ children }: {children: React.ReactNode}){
    const {width, height} = useDimension();
    const [hambVerify, setHambVerify] = useState(false);

    useEffect(()=>{
        if(width <= 425){
            setHambVerify(true);
        }else{
            setHambVerify(false);
        }
    },[hambVerify, width]);

    function mdScreen(){
        return (
            <div className="flex flex-row w-full h-full overflow-hidden border-2 border-black">
                <BotaoHamb />
                <div className="flex flex-col w-full h-full mt-14">
                    <Header />
                    <div className="p-4 w-full h-full flex flex-col py-20 md:py-0 overflow-hidden">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
    function normalScreen(){
        return (
            <div className="flex flex-row w-full h-full">
                <BarraLateral />
                <div className="flex flex-col w-full h-full">
                    <Header />
                    <div className="p-4 w-full h-full flex flex-col overflow-hidden">
                        {children}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <main className="w-screen h-screen flex flex-col bg-sky-200">
            
                {
                    hambVerify ? mdScreen() : normalScreen()
                }               
                
            
        </main>
    );
}