import React from "react";
import styles from "./Buscador.module.scss"
import {CgSearch} from "react-icons/cg";
import Cardapio from "../index";

interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}
export default function Buscador({busca, setBusca}: Props){
    return(

        <>
            <div className={styles.buscador}>

                <input
                    value={busca}
                    onChange={(e)=> setBusca(e.target.value)}
                    placeholder="Digite aqui ..."
                />
                <CgSearch
                    size={25}
                />
            </div>
        </>

    )
}