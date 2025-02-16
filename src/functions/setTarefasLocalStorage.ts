import Tarefa from "@/core/interfaces/Tarefa";

export default function setTarefasLocalStorage(tarefas: Tarefa[]):void {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}