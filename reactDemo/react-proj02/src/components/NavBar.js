import {Link} from 'react-router-dom';

const NavBar = (props) =>(
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">

        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">LifeCycleDemo</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/todos">Todos</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;