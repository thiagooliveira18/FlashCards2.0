import BasePages from '@/components/BasePages/BasePages';
import Deck from '@/components/Deck/Deck';

export default function MyDecks() {
    return(
        <BasePages>
            <div className="flex flex-wrap gap-5 justify-center w-full h-full p-4 overflow-y-auto">
                <Deck titulo="Inglês Intermediário" cartas="52" id="01" />
                <Deck titulo="Inglês Intermediário" cartas="52" id="01" />
                <Deck titulo="Inglês Intermediário" cartas="52" id="01" />
                <Deck titulo="Inglês Intermediário" cartas="52" id="01" />
                <Deck titulo="Inglês Intermediário" cartas="52" id="01" />
                <Deck titulo="Inglês Intermediário" cartas="52" id="01" />
                <Deck titulo="Inglês Intermediário" cartas="52" id="01" />
                <Deck titulo="Inglês Intermediário" cartas="52" id="01" />
                <Deck titulo="Inglês Intermediário" cartas="52" id="01" />
                <Deck titulo="Inglês Intermediário" cartas="52" id="01" />
                <Deck titulo="Inglês Intermediário" cartas="52" id="01" />
            </div>            
        </BasePages>
    );
}