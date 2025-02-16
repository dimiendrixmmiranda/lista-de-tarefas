interface ConfirmacaoExcluirTarefaConcluidaProps {
	visibleConfirmacao: boolean,
	confirmarExclusao: () => void,
	cancelarExclusao: () => void
}

export default function ConfirmacaoExcluirTarefaConcluida({ visibleConfirmacao, confirmarExclusao, cancelarExclusao }: ConfirmacaoExcluirTarefaConcluidaProps) {
	return (
		<div className={`${visibleConfirmacao ? 'flex' : 'hidden'} absolute bg-[--preto] w-[280px] h-fit p-4 flex flex-col gap-4 rounded-lg top-[50%] left-[50%]`} style={{ transform: 'translate(-50%,-50%)' }}>
			<h2 className="text-2xl leading-7 font-bold text-center">Deseja realmente excluir todas as tarefas concluídas?</h2>
			<div className="grid grid-cols-2 gap-2">
				<button onClick={confirmarExclusao} className="bg-[--vermelho] font-black uppercase text-xl">Sim</button>
				<button onClick={cancelarExclusao} className="bg-[--vermelho] font-black uppercase text-xl">Nao</button>
			</div>
		</div>
	)
}