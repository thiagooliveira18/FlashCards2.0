import BasePages from '@/components/BasePages/BasePages';
import Deck from '@/components/Deck/Deck';

export default function MyDecks() {
    return(
        <BasePages>
            <div className="flex flex-wrap gap-10 justify-center w-full h-full p-4 py-10 overflow-y-auto">
                <Deck titulo="Inglês Intermediário" cartas="52" id="01" />
                <Deck titulo="Inglês Avançado" cartas="62" id="02" />
                <Deck titulo="Direito Constitucional" cartas="80" id="03" />
                <Deck titulo="Português" cartas="66" id="04" />
                <Deck titulo="Matemática Básica" cartas="33" id="05" />
                <Deck titulo="Física Geral" cartas="48" id="06" />
            </div>            
        </BasePages>
    );
}