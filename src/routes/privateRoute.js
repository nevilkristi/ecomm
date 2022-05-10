import { lazy } from "react";


const DashBoard = lazy(() => import("../modules/Dashboard/DashBoard"));
const AboutUs = lazy(() => import("../modules/AboutUs/AboutUs"));

const protectedRoutes = [
    {path:"/",exact:true,component:DashBoard},
    {path:"/aboutus",exact:true,component:AboutUs},
]

export default protectedRoutes;