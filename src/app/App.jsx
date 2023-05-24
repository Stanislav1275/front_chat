import {Suspense, useState} from 'react'
import {ErrorBoundery} from "../shared/ui/errorBoundery/ErrorBoundery.jsx";
import AppHeader from "../widgets/header/AppHeader.jsx";
import {useRoutes} from "react-router-dom";
import MyRoutes from "../routes/MyRoutes.jsx";
import {ProgressSpinner} from "primereact/progressspinner";
import Main from "../widgets/main/Main.jsx";
import Footer from "../widgets/footer/Footer.jsx";

import './App.scss'
import {createPortal} from "react-dom";
import {ChatPopup} from "../widgets/modals/chatPopup/ChatPopup.jsx";
import {useSelector} from "react-redux";
import {isLoggedIn} from "../shared/api/auth/selectors.js";



function App() {
    const isLog = useSelector(isLoggedIn)
    const routes = useRoutes(MyRoutes);
    return (
        <div className="App">
            <ErrorBoundery>
                <AppHeader/>
            </ErrorBoundery>
            <ErrorBoundery>
                <Main>
                    <Suspense fallback={<ProgressSpinner/>}>
                        {routes}
                    </Suspense>
                </Main>
            </ErrorBoundery>

            <Footer/>
            {isLog?createPortal(<ChatPopup/>, document.body): <i className="pi-error"></i>}
        </div>
    )
}

export default App
