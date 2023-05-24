import React from "react";
import Dialog from "../../dialog/Dialog.jsx";
import LoginForm from "../../../features/LoginForm/LoginForm";
import PhoneCallForm from "../phoneCallModal/PhoneCallForm.jsx";
import {useDispatch, useSelector} from "react-redux";
import {closeLogin, openLogin} from "../modalsSlice.js";
import {isLoginOpen} from "../selectors.js";
import {isLoggedIn} from "../../../shared/api/auth/selectors.js";

const LoginPopup = () => {
    const dispatch = useDispatch();
    const isCallOpen = useSelector(isLoginOpen);
    const isLogged = useSelector(isLoggedIn)
    console.log(isLogged)
    const loginForm = !isLogged?<LoginForm/>:null;
    return (
        <Dialog close={() => {
            dispatch(closeLogin())
        }} open={() => {
            dispatch(openLogin())
        }} isOpen={isCallOpen} postfix={isLogged ? <h6>Личный кабинет</h6>: null} primeReactIconClassName={isLogged?"user-edit": "pi-user"}>
            {loginForm}
        </Dialog>
    )
}

export default LoginPopup