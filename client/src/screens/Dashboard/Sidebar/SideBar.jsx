import './sidebar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';
const SideBar = () => {
    const navigate = useNavigate()
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    useEffect(() => {
        if (!userInfo) {
            navigate("/");
        }
        // eslint-disable-next-line
    }, [navigate]);

    return (
        <>
            <div className="dashboard d-flex">
                <nav className="left_side_nav" data-expanded="true">
                    <div className="nav__main">
                        <h4 className='mb-4 mt-4 text-center' style={{ color: "#0da18e" }}>UOG_TMS</h4>
                        <ul className="nav__items">
                            <li className="nav__item">
                                <NavLink className="nav__item-box" title="Dashboard" to='/dashboard'>
                                    <i className="fa-solid fa-gauge"></i>
                                    <span className="nav__item-text">Dashboard</span>
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className="nav__item-box" title="Dashboard" to="/buses">
                                    <i className="fa-solid fa-bus"></i>
                                    <span className="nav__item-text" onClick={(e) => {
                                    }}>Buses</span>
                                </NavLink>
                            </li>

                            <li className="nav__item">
                                <NavLink className="nav__item-box" title="Dashboard" to="/api/student/get">
                                    <i className="fa-solid fa-users"></i>
                                    <span className="nav__item-text" onClick={(e) => {
                                    }}>Students</span>
                                </NavLink>
                            </li>

                            <li className="nav__item">
                                <NavLink className="nav__item-box" title="Dashboard" to="/api/drivers/get">
                                    <i className="fa-solid fa-users"></i>
                                    <span className="nav__item-text" onClick={(e) => {
                                    }}>Driver</span>
                                </NavLink>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>

        </>
    )
}

export default React.memo(SideBar)