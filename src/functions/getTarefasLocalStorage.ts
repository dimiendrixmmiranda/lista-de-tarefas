import Tarefa from "@/core/interfaces/Tarefa"

export default function getTarefasLocalStorage():Tarefa[]{
    const tarefasExistentes = JSON.parse(localStorage.getItem('tarefas') || '[]')
    return tarefasExistentes
}