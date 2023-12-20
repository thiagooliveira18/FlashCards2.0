import BasePages from "@/components/BasePages/BasePages";

export default function About() {
    return(
        <BasePages>
            <div className="w-[95%] h-full p-4 px-7 ml-4 flex flex-col justify-between bg-white rounded-3xl shadow-2xl">
                <div>
                    <div className="w-full h-14">
                        <h1 className="text-3xl font-bold">Projeto Flash Cards</h1>
                    </div>
                    <div className="w-full h-16">
                        <span className="text-xl font-medium">Flash cards é um método de estudo onde o propósito é aprender por repetição, reforçando o conhecimento adquirido.</span>
                    </div>
                    <div className="w-full h-24">
                        <span className="text-xl font-medium">Como exemplo podemos utilizar o inglês, onde a carta de pergunta é um texto ou palavra em inglês e a resposta é a tradução, o usuário antes de revelar a resposta tenta responder por si e após verifica se acertou ou não.</span>
                    </div>
                    <div className="w-full h-7">
                        <span className="text-lg font-medium">Este projeto foi criado com o propósito de estudos e aperfeiçoamento</span>
                    </div>
                </div>
                <div className="py-4 flex flex-row w-full">
                    <h2 className="text-xl">Criado por:</h2><h3 className="text-xl font-bold px-1">Thiago Oliveira</h3>
                </div>
            </div>
        </BasePages>
    );
}