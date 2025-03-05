'use client'

import Calendario from "@/components/calendario/Calendario"
import ConfirmacaoExcluirTarefa from "@/components/confirmacao/ConfirmacaoExcluirTarefa"
import ConfirmacaoExcluirTarefaConcluida from "@/components/confirmacao/ConfirmacaoExcluirTarefasConlcuidas"
import Filtros from "@/components/filtros/Filtros"
import Formulario from "@/components/formulario/Formulario"
import Template from "@/components/template/Template"
import Tarefa from "@/core/interfaces/Tarefa"
import gerarId from "@/functions/gerarId"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaTrashCan } from "react-icons/fa6"

export default function Home() {
	const [inputTexto, setInputTexto] = useState<string>('')
	const [listaDeTarefas, setListaDeTarefas] = useState<Tarefa[]>([])
	const [tarefasFiltradas, setTarefasFiltradas] = useState<Tarefa[]>([])
	const [filtro, setFiltro] = useState('geral')
	const [visibleConfirmacao, setVisibleConfirmacao] = useState(false)
	const [visibleConfirmacaoConcluidas, setVisibleConfirmacaoConcluidas] = useState(false)
	const [tarefaParaExcluir, setTarefaParaExcluir] = useState<Tarefa | null>(null)

	// Carregar tarefas e filtro do localStorage ao iniciar
	useEffect(() => {
		const tarefasSalvas = localStorage.getItem('listaDeTarefas')
		const filtroSalvo = localStorage.getItem('filtro')

		if (tarefasSalvas) {
			setListaDeTarefas(JSON.parse(tarefasSalvas))
		}
		if (filtroSalvo) {
			setFiltro(filtroSalvo)
		}
	}, [])

	// Salvar tarefas no localStorage sempre que listaDeTarefas mudar
	useEffect(() => {
		localStorage.setItem('listaDeTarefas', JSON.stringify(listaDeTarefas))
	}, [listaDeTarefas])

	// Salvar o filtro no localStorage sempre que ele mudar
	useEffect(() => {
		localStorage.setItem('filtro', filtro)
	}, [filtro])

	// Atualizar lista filtrada sempre que o filtro ou lista de tarefas mudar
	useEffect(() => {
		if (filtro === 'geral') {
			setTarefasFiltradas(listaDeTarefas)
		} else if (filtro === 'ativas') {
			const tarefasNaoConcluidas = listaDeTarefas.filter(tarefa => !tarefa.concluida)
			setTarefasFiltradas(tarefasNaoConcluidas)
		} else if (filtro === 'concluidas') {
			const tarefasConcluidas = listaDeTarefas.filter(tarefa => tarefa.concluida)
			setTarefasFiltradas(tarefasConcluidas)
		}
	}, [filtro, listaDeTarefas])

	function adicionarTarefa() {
		const novaTarefa: Tarefa = {
			concluida: false,
			descricao: inputTexto,
			id: gerarId()
		}

		const novaLista = [...listaDeTarefas, novaTarefa]
		setListaDeTarefas(novaLista)
		setInputTexto('')
	}

	function concluirTarefa(tarefa: Tarefa) {
		const novasTarefas = listaDeTarefas.map(t => {
			if (t.id === tarefa.id) {
				return { ...t, concluida: !t.concluida }
			}
			return t
		})
		setListaDeTarefas(novasTarefas)
	}


	function apagarTarefa(tarefa: Tarefa) {
		setTarefaParaExcluir(tarefa)
		setVisibleConfirmacao(true)
	}

	function confirmarExclusao() {
		if (tarefaParaExcluir) {
			const novasTarefas = listaDeTarefas.filter(t => t.id !== tarefaParaExcluir.id)
			setListaDeTarefas(novasTarefas)
			setVisibleConfirmacao(false)
			setTarefaParaExcluir(null)
		}
	}

	function confirmarExcluirTarefasConcluidas() {
		const novasTarefas = listaDeTarefas.filter(t => !t.concluida)
		setListaDeTarefas(novasTarefas)
		setVisibleConfirmacaoConcluidas(false)
	}

	function excluirTarefasConcluidas() {
		setVisibleConfirmacaoConcluidas(true)
	}

	return (
		<Template>
			<div className="relative min-h-[80vh] max-w-[600px] flex flex-col gap-4 items-start justify-center py-4 w-full mx-auto lg:py-6 xl:max-w-[1100px]">
				<div className="flex flex-col w-full">
					<div className="text-black p-2 w-full h-full">
						{/* Adicionar Tarefa */}
						<Formulario adicionarTarefa={adicionarTarefa} inputTexto={inputTexto} setInputTexto={setInputTexto} />

						{/* Lista de Tarefas */}
						<div className="flex flex-col gap-3 rounded-lg mt-4 overflow-hidden bg-[--vermelho-escuro] text-white p-2" style={{ boxShadow: '1px 1px 2px black' }}>
							{
								tarefasFiltradas.length <= 0 ? (
									<div className="text-center text-2xl font-bold leading-7 py-2 xl:text-4xl xl:py-3">Nenhuma tarefa encontrada!</div>
								) : (
									< ul className="flex flex-col">
										{
											tarefasFiltradas.map(tarefa => {
												return (
													<li key={tarefa.id} className={`p-2 border-b-2 gap-2 border-black ${tarefa.concluida ? 'bg-green-500 text-white' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto' }}>
														<label className="relative cursor-pointer flex items-center">
															<input
																className="checkConcluido"
																type="checkbox"
																name="concluirTarefa"
																id="concluirTarefa"
																checked={tarefa.concluida}
																onChange={() => concluirTarefa(tarefa)}
															/>
															{
																tarefa.concluida ? <div className="absolute top-[50%] left-[50%]" style={{ transform: 'translate(-50%,-50%)' }}>
																	<Image alt="check" src={'/check.png'} width={20} height={20}></Image>
																</div> : ''
															}
														</label>
														{/* linha cortada também tem que ficar mais clara */}
														<span className={`overflow-hidden text-ellipsis whitespace-nowrap self-center ${tarefa.concluida ? 'line-through ' : ''}`}>{tarefa.descricao}</span>
														<button onClick={() => apagarTarefa(tarefa)}>
															<FaTrashCan />
														</button>
													</li>
												)
											})
										}
									</ul>
								)
							}

							<div className="subcontainer">
								{/* Filtros */}
								<Filtros filtro={filtro} setFiltro={setFiltro}></Filtros>

								{/* Tarefas encontradas */}
								<div className="w-full text-center text-white py-1 xl:col-start-1 xl:col-end-2 xl:row-start-1">
									{
										tarefasFiltradas.length <= 0 ? (
											<div>
												<p>0 tarefas encontradas!</p>
											</div>
										) : (
											<div>
												<p className="">{tarefasFiltradas.length} Tarefas encontradas</p>
											</div>
										)
									}
								</div>

								<div className="w-full flex justify-center items-center text-center py-1 xl:col-start-3 xl:col-end-4 xl:row-start-1">
									<button onClick={excluirTarefasConcluidas}>Excluir Concluídas?</button>
								</div>
							</div>
						</div>
					</div>
					<ConfirmacaoExcluirTarefa
						visibleConfirmacao={visibleConfirmacao}
						confirmarExclusao={confirmarExclusao}
						cancelarExclusao={() => setVisibleConfirmacao(false)}
					/>
					<ConfirmacaoExcluirTarefaConcluida
						visibleConfirmacao={visibleConfirmacaoConcluidas}
						confirmarExclusao={confirmarExcluirTarefasConcluidas}
						cancelarExclusao={() => setVisibleConfirmacaoConcluidas(false)}
					/>
				</div>
				<div className="p-4 text-black relative w-full h-full max-w-[600px]">
					<Calendario></Calendario>
				</div>
			</div>
		</Template >
	)
}
