interface ConfirmacaoExcluirTarefaProps {
	visibleConfirmacao: boolean,
	confirmarExclusao: () => void,
	cancelarExclusao: () => void
}

export default function ConfirmacaoExcluirTarefa({ visibleConfirmacao, confirmarExclusao, cancelarExclusao }: ConfirmacaoExcluirTarefaProps) {
	return (
		<div className={`${visibleConfirmacao ? 'flex' : 'hidden'} text-white z-20 bg-[--preto] w-[280px] h-fit p-4 flex flex-col gap-4 rounded-lg absolute top-[50%] left-[50%]`} style={{transform: 'translate(-50%,-50%)'}}>
			<h2 className="text-2xl leading-7 font-bold text-center">Deseja realmente excluir essa tarefa?</h2>
			<div className="grid grid-cols-2 gap-2">
				<button onClick={confirmarExclusao} className="bg-[--vermelho] font-black uppercase text-xl">Sim</button>
				<button onClick={cancelarExclusao} className="bg-[--vermelho] font-black uppercase text-xl">Nao</button>
			</div>
		</div>
	)
}