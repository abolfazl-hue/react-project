import React , {useContext} from 'react';
import Abolfazl from './../../contexts/abolfazl'
import {NavLink} from 'react-router-dom'

function Header() {

    let abolfazl = useContext(Abolfazl)
    let {married} = abolfazl
    
    return (
        <>
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>Welcome to My notes!</strong>
                    </a>
                    <nav className="navbar navbar-expand-sm ">
                    <ul className="navbar-nav mr-5">
                            <li className="nav-item">
                                <NavLink className = 'nav-link'  exact  to = '/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className = 'nav-link' to = '/about' >About</NavLink>
                            </li>
                            <li className="nav-item">
                                  <NavLink className = 'nav-link' to = '/Contact' >Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
        
                    {
                        !married
                        ?<button className = 'btn btn-success' onClick = {() => abolfazl.dispatch({type : 'letIn_todo'})} >Login</button>
                        :<button className = 'btn btn-danger' onClick = {() => abolfazl.dispatch({type : 'letOut_todo'})} >Logout</button>
                    }
                </div>
            </div>
        </header>
        </>
    )
}


export default Header;