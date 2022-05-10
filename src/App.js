import protectedRoutes from "./routes/privateRoute";
import { PrivateRouteMiddleWare } from "./routes/PrivateRouteMiddleWare";

import { Switch,BrowserRouter } from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter >
    <Switch>
    {protectedRoutes.map((item, i) => (
      <PrivateRouteMiddleWare key={i} {...item} />
    ))}
  </Switch></BrowserRouter>
   );
}

export default App;
