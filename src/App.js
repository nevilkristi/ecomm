import protectedRoutes from "./routes/privateRoute";
import { PrivateRouteMiddleWare } from "./routes/PrivateRouteMiddleWare";

import { Routes,BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    
    <Layout >
    <BrowserRouter >
    <Routes>

    {protectedRoutes.map((item, i) => (
      <Route key={i} path={item.path}  element={<item.element />} />
      ))
    
    }
  </Routes></BrowserRouter>
  </Layout>
   );
}

export default App;
