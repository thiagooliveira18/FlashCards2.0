import Image from "next/image";
import avatar from "../../../public/avatar_01.png";
import BotaoProfile from "../BotaoProfile/BotaoProfile";
import BotaoAddDeck from "../BotaoAddDeck/BotaoAddDeck";

export default function Header(){
    return (
        <div className="w-full h-32 px-10 flex flex-row items-center justify-between">
            <BotaoProfile />
            <BotaoAddDeck />
        </div>
    );
}