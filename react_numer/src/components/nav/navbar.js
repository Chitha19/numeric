import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <div class="area"></div>
 <nav class="main-menu">
         <ul>
         <li>
                 <Link to="/">

                     <span class="nav-text">
                         Main
                     </span>
                 </Link>

             </li>
             <li>
                 <Link to="/Bisection">

                     <span class="nav-text">
                         Bisection
                     </span>
                 </Link>

             </li>
             <li class="has-subnav">
                 <Link to="/FalsePosition">

                     <span class="nav-text">
                       False-Position
                     </span>
                 </Link>

             </li>
             <li class="has-subnav">
                 <Link to="/OnePoint">

                     <span class="nav-text">
                         One-Point Iteration
                     </span>
                 </Link>

             </li>
             <li class="has-subnav">
                 <Link to="/Newton">

                     <span class="nav-text">
                         Newton Raphson
                     </span>
                 </Link>

             </li>
             <li class="has-subnav">
                 <Link to="/Secant">

                     <span class="nav-text">
                         Secant
                     </span>
                 </Link>
             </li>
             

         </ul>
         </nav>
         
    </div>
  )
}

export default Navbar