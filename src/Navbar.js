import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/todos">Mes tâches</NavLink>
            <NavLink to="/about">A propos</NavLink>
        </nav>
    )
}
