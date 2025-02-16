'use client'
import Image from "next/image";
import Link from "next/link";

export default function Cabecalho(){
    return (
        <header className="p-2 bg-[--vermelho-escuro] flex items-center justify-center">
            <Link href={'/'} className="flex items-center gap-1">
                <Image alt="Logo do site" src={'/lista-de-tarefas.png'} width={200} height={50}></Image>
            </Link>
        </header>
    )
}