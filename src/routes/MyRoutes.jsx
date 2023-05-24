import React from "react";
import ErrorBoundery from "../shared/ui/errorBoundery/ErrorBoundery.jsx";
import {MainPage} from "../pages/mainPage/MainPage.jsx";
import {ProfilePage} from "../pages/profilepage/ProfilePage.jsx";
// const MainPage = React.lazy(() => import("../pages/MainPage/MainPage"))
// const FlightBuyingPage = React.lazy(() => import("../pages/flightByingPage/FlightBuyingPage"))
// const BuyOrderingBus = React.lazy(() => import("../pages/BuyOrderingBus/BuyOrderingBus"))
export const MyRoutes = [
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "/about",
        element: <div>О нас</div>
    },
    {
        path: "/products",
        element: <div>продукты</div>
    },
    {
        path: "/profile",
        element: <ProfilePage/>
    },
    // {
    //     path: "/flights/:id",
    //     element: <ErrorBoundery> <FlightBuyingPage/></ErrorBoundery>
    // }

];
export default MyRoutes