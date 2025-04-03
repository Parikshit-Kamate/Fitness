import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <header className="d-flex align-items-center justify-content-between px-4 py-3 bg-dark">
                <div className="text-white fs-3 fw-bold">
                    CASUALDEHYDE <span className="text-warning">FITNESS</span>
                </div>
                <nav>
                    <NavLink to="/home" className="text-white me-3 text-decoration-none">Home</NavLink>
                    <NavLink to="/programs" className="text-white me-3 text-decoration-none">Programs</NavLink>
                    <NavLink to="/about" className="text-white me-3 text-decoration-none">About Us</NavLink>
                    <NavLink to="/plans" className="text-white me-3 text-decoration-none">Plans</NavLink>
                    <NavLink to="/contact" className="text-white me-3 text-decoration-none">Contact</NavLink>
                </nav>
                <button className="btn btn-primary">Join Now</button>
            </header>

            <Outlet />

        </div>
    )
}

export default Navbar
