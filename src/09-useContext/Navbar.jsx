import { Link,NavLink } from "react-router-dom";


export const Navbar = () => {
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
    <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">useContext</NavLink>
   
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <NavLink to='/' className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/Login' className="nav-link">Login</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink to='/About' className="nav-link">About</NavLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
)
}