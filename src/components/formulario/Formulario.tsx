import { CgMathPlus } from "react-icons/cg"

interface FormularioProps {
    inputTexto: string
    setInputTexto: (e: string) => void
    adicionarTarefa: () => void
}

export default function Formulario({ inputTexto, setInputTexto, adicionarTarefa }: FormularioProps) {
    return (
        <div className="w-full flex">
            <input
                className="h-[40px] p-2 px-4 rounded-lg w-full rounded-e-none"
                type="text"
                name="adicionarTarefa"
                id="adicionarTarefa"
                placeholder="Informe uma nova terefa..."
                value={inputTexto}
                onChange={(e) => setInputTexto(e.target.value)}
            />
            <button className="h-[40px] w-[40px] bg-[--vermelho] text-white rounded-e-lg flex justify-center items-center text-2xl" onClick={() => adicionarTarefa()}><CgMathPlus /></button>
        </div>
    )
}