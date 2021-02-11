import React from 'react';
import { Link } from 'react-router-dom';

const links =[
    ["/","Items List"],
    ["/add","New Item"]
];

const Header =(props) => (
    <React.Fragment>
        <header className="jumbotron mb-0">
            <h1>
                {props.title}
                <small>{props.tagLine}</small>
            </h1>
        </header>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <ul className="navbar-nav">
                {
                    links.map(
                        link => 
                        <li className="nav-item">
                            <Link to={link[0]} className="nav-link">
                                {link[1]}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    </React.Fragment>
);

export default Header;