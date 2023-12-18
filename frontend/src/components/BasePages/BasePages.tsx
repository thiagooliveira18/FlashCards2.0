import BarraLateral from "../BarraLateralComp/BarraLateral/BarraLateral";
import Header from "../HeaderComp/Header/Header";

export default function BasePages({ children }: {children: React.ReactNode}){
    return (
        <main className="w-screen h-screen flex flex-col bg-sky-200">
            <div className="flex flex-row w-full h-full">
                <BarraLateral />
                <div className="flex flex-col w-full h-full">
                    <Header />
                    <div className="p-4 w-full h-full flex flex-col overflow-hidden">
                       {children}
                    </div>
                </div>
            </div>
        </main>
    );
}