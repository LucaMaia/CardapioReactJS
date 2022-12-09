import  styles from "./Cardapio.module.scss"
import {ReactComponent as Logo} from "../../assets/logo.svg"
import Buscador from "./Buscador";
import {useState} from "react";
import Filtros from "../Filtros";
export default function Cardapio() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null)

    return(
        <main>
            <nav className={styles.menu}>
                <Logo/>
            </nav>

            <header className={styles.header}>
                <div className={styles.header__text}>
                    A cada do Código e da massa
                </div>
            </header>

            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>
                    <Buscador
                        busca={busca}
                        setBusca={setBusca}
                    />

                    <div className={styles.cardapio__filtros}>
                        <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    </div>
                </h3>
            </section>
        </main>
    )
}