interface MainProps{
    children: React.ReactElement
}

export default function Main({children}: MainProps){
    return (
        <main className="overflow-x-hidden bg-[--branco] flex justify-center items-center">
            {children}
        </main>
    )
}