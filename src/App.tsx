import { Route, Routes } from "react-router-dom";
import { path } from "./utils/path";
import MainLayout from "./layouts/main-layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { Toaster } from "react-hot-toast";
import CreateCategory from "./pages/categories/create-category";
import CreateProduct from "./pages/products/create-product";

function App() {
  return (
    <>
      <Routes>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />
        <Route path={path.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={path.CREATE_CATEGORY} element={<CreateCategory />} />
          <Route path={path.CREATE_PRODUCT} element={<CreateProduct />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
