interface FiltrosProps {
	filtro: string
	setFiltro: (e: string) => void
}

export default function Filtros({ filtro, setFiltro }: FiltrosProps) {
	return (
		<ul className="grid grid-cols-3 w-full gap-2 xl:col-start-2 xl:col-end-3 xl:mx-auto">
			<li className="text-center font-bold flex items-center justify-center">
				<button
					className={filtro === 'geral' ? 'transition-all border-b-2 border-[--bege] px-2 leading-5 scale-[1.05] xl:text-2xl' : 'text-white xl:text-xl'}
					onClick={() => setFiltro('geral')}
				>
					Geral
				</button>
			</li>
			<li className="text-center font-bold flex items-center justify-center">
				<button
					className={filtro === 'ativas' ? 'transition-all border-b-2 border-[--bege] px-2 leading-5 scale-[1.05] xl:text-2xl' : 'text-white xl:text-xl'}
					onClick={() => setFiltro('ativas')}
				>
					Ativas
				</button>
			</li>
			<li className="text-center font-bold flex items-center justify-center">
				<button
					className={filtro === 'concluidas' ? 'transition-all border-b-2 border-[--bege] px-2 leading-5 scale-[1.05] xl:text-2xl' : 'text-white xl:text-xl'}
					onClick={() => setFiltro('concluidas')}
				>
					Concluídas
				</button>
			</li>
		</ul>
	)
}