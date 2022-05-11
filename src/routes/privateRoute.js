import { lazy } from "react";


const DashBoard = lazy(() => import("../modules/Dashboard/DashBoard"));
const AboutUs = lazy(() => import("../modules/AboutUs/AboutUs"));

const protectedRoutes = [
    {path:"/",exact:true,element:DashBoard},
    {path:"/aboutus",exact:true,element:AboutUs},
]

export default protectedRoutes;