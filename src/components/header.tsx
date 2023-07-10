import { FaAirbnb, FaBars} from "react-icons/fa";
import style from './header.module.css'

function Header(){
    return(
        <>
            <header>
                <div className={style.leftHeader}>
                    <div className={style.logoHeader}>
                        <FaAirbnb size="30px"/>
                        <a href="/"><h1>Money.my</h1></a>
                    </div>
                    <div className={style.sideBar}>
                        <div className={style.aside}>
                            <ul>
                                <li><FaBars /></li>
                                <li><a href="">Visão geral</a></li>
                                <li><a href="">Lançamentos</a></li>
                                <li><a href="">Metas</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.rigtHeader}>
                        <div className={style.perfilHeader}>perfil</div>
                </div>
            </header>
        </>
    )
}
export default Header