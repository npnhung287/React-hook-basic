import './Nav.scss';
import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <div className="topnav">

            <NavLink to="/" exact>
                Home
            </NavLink>
            <NavLink to="/todo" exact>
                Todo App
            </NavLink>
            <NavLink to="/count" exact>
                Count
            </NavLink>
            <NavLink to="/blog" exact>
                Blog App
            </NavLink>
            <NavLink to="/secrect" exact>
                Secret
            </NavLink>
        </div>
    )
}

export default Nav;