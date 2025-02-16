import Rodape from "./footer/Rodape";
import Cabecalho from "./header/Cabecalho";
import Main from "./main/Main";
import style from './style.module.css'

interface TemplateProps {
    children: React.ReactElement
}


export default function Template({ children }: TemplateProps) {
    return (
        <div className={style.template}>
            <Cabecalho></Cabecalho>
            <Main>
                {children}
            </Main>
            <Rodape></Rodape>
        </div>
    )
}