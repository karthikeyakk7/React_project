import React from 'react'
import { Link } from 'react-router-dom';

const navBar = () => {
  return (
    <div>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/Dashboard"><li>Dashboard</li></Link>
            <Link to="/About"><li>About</li></Link>
        </ul>
    </div>
  )
}

export default navBar
