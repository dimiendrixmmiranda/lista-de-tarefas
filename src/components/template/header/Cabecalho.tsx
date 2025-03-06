'use client'
import Image from "next/image";
import Link from "next/link";

export default function Cabecalho(){
    return (
        <header className="p-2 bg-[--azul-escuro] flex items-center justify-center">
            <Link href={'/'} className="flex items-center gap-1">
                <Image alt="Logo do site" src={'/logo-lista-tarefas.png'} width={300} height={70}></Image>
            </Link>
        </header>
    )
}