
import Root from "./pages/Root";
import Home from "./home/Home";
import Create from "./create/Create";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>


    <Route index element={<Home />}/>
    <Route path="create" element={<Create />}/>

    </Route>
  )
);







function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
