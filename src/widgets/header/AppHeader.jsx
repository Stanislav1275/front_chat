import "./AppHeader.scss"
import {NavLink} from "react-router-dom";
import LoginPopup from "../modals/loginModal/LoginPopup.jsx";
import logo from "./logo.svg"
import PhoneCallForm from "../modals/phoneCallModal/PhoneCallForm.jsx";
import Dialog from "../../widgets/dialog/Dialog.jsx"
import React from "react";
import LoginForm from "../../features/LoginForm/LoginForm.jsx";
import PhoneCallPopup from "../modals/phoneCallPopup/PhoneCallPopup.jsx";
import {useDispatch, useSelector} from "react-redux";
import {isLoggedIn} from "../../shared/api/auth/selectors.js";
const AppHeader = () => {
    const isLogged = useSelector(isLoggedIn)
    return (
        <div className="headerWrapper">
            <header className="appheader">

                <div className="appheader__left">
                    <div className="logo">
                        <img src={logo} alt="ROWI"/>
                    </div>

                </div>
                <div className="appheader__right">
                    <div className="products">
                        <NavLink to="/products">продукты</NavLink>
                    </div>
                    <div className="about">
                        <NavLink to="/about">о нас</NavLink>

                    </div>
                    <div className="blog">
                        <NavLink to="/blog">блог</NavLink>
                    </div>
                    <PhoneCallPopup/>
                    {!isLogged? <LoginPopup/>: <NavLink to={"/profile"}><i className="pi pi-user"></i></NavLink>}

                </div>
            </header>
        </div>

    )
}
export default AppHeader