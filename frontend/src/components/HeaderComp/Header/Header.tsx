import BotaoProfile from "../BotaoProfile/BotaoProfile";
import BotaoAddDeck from "../BotaoAddDeck/BotaoAddDeck";
import { useEffect, useState } from "react";
import useDimension from "@/hooks/useDimension/useDimension";

export default function Header(){
    const {width} = useDimension();
    const [btnNewDeck, setBtnNewDeck] = useState(false);
    useEffect(() => {
        if(width <= 425){
            setBtnNewDeck(false);
        }else{
            setBtnNewDeck(true);
        }
    },[btnNewDeck, width]);

    function mdScreen() {
        return (
            <div className="w-full h-32 px-10 flex flex-row items-center justify-between">
                <BotaoProfile />
                <BotaoAddDeck />
            </div>
        );
    }

    function smallScreen(){
        return(
            <div className="w-full h-32 px-10 flex flex-row items-center justify-center">
                <BotaoProfile />
            </div>
        );
    }

    return btnNewDeck ? mdScreen() : smallScreen();
}