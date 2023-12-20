import Post from "../Post/Post";

export default function BodyHome(){
    return(
        <div className="flex flex-col w-full h-full p-4 overflow-y-auto">
            <Post key="1" id="1" criador="Thiago Oliveira" titulo="Inglês intermediário" descricao="Cartas com palavras e frases intermediárias de inglês" data="17/12/2023 - 17:30" />
            <Post key="3" id="3" criador="Isabella Correa" titulo="Direito Penal" descricao="Cartas com questões de Direito Penal" data="12/12/2023 - 12:30" />
            <Post key="2" id="2" criador="Thiago Oliveira" titulo="Inglês avançado" descricao="Cartas com palavras e frases Avançadas de inglês" data="18/12/2023 - 18:20" />
        </div>
    );
}