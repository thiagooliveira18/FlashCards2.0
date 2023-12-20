import Link from "next/link";

type PropsPost = {
    id: string,
    titulo: string,
    criador: string,
    descricao: string,
    data: string
}

export default function Post(props: PropsPost){
    return(
        <Link
            href={`/deck/${props.id}`}
            className="flex flex-col justify-between w-full h-56 px-6 py-4 mb-2 border border-black rounded-2xl bg-slate-50 hover:bg-slate-200">
            <div className="flex flex-col items-start">
                <h1 className="font-bold text-4xl">{props.titulo}</h1>
                <h2 className="mt-1 font-bold">Criado por: {props.criador}</h2>
            </div>
            <h2 className="text-lg py-4 text-start">{props.descricao}</h2>
            <h2 className="text-sm">{props.data}</h2>
        </Link>
    );
}