import style from "./Navbar.module.css";
import {Link} from "react-router-dom";
function Navbar(){
    return(<>
        <nav className={style.nav}>
            <Link to="/">
                <h1 className={style.title}>
                    Inicio
                </h1>
            </Link>
            <Link to="/home">
                <h1 className={style.title}>
                    Videogames
                </h1>
            </Link>
            <Link to="/create">
                <h2 className={style.subtitle}>
                    Create Videogame
                </h2>
            </Link>
        </nav>
    </>)
}

export default Navbar