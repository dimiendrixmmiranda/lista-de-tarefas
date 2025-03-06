import { CgMathPlus } from "react-icons/cg"

interface FormularioProps {
    inputTexto: string;
    setInputTexto: (e: string) => void;
    inputData: string;
    setInputData: (e: string) => void;
    adicionarTarefa: () => void;
}

import style from './style.module.css'

export default function Formulario({ inputTexto, setInputTexto, inputData, setInputData, adicionarTarefa }: FormularioProps) {
    
    return (
        <div className={style.formulario}>
            <input
                className="h-[40px] p-2 px-4 rounded-lg w-full rounded-e-none col-start-1 col-end-2"
                type="text"
                name="adicionarTarefa"
                id="adicionarTarefa"
                placeholder="Informe uma nova terefa..."
                value={inputTexto}
                onChange={(e) => setInputTexto(e.target.value)}
            />
            <input
                className="h-[40px] p-2 px-4 rounded-lg col-start-1 col-end-2"
                type="date"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
            />
            <button className="w-full h-full bg-[--vermelho] text-white rounded-e-lg flex justify-center items-center text-2xl row-start-1 row-end-3 col-start-2 col-end-3" onClick={() => adicionarTarefa()}><CgMathPlus /></button>
        </div>
    )
}