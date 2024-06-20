import Home from "./Components/Home";
import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Singin from "./Components/Signin";
import Registration from "./Components/Registration";
import DogFood from "./Components/Items/DogFood";
import CatFood from "./Components/Items/CatFood";
import DogTreats from "./Components/Items/DogTreats";
import CatTreats from "./Components/Items/CatTreats";
import HealthCare from "./Components/Items/HealthCare";
import { Toaster } from "react-hot-toast";
import { Products } from "./Components/Items/Products";
import LitterSupplies from "./Components/Items/LitterSupplies";
import Toys from "./Components/Items/Toys";
import WalkEssentials from "./Components/Items/WalkEssentials";
import Grooming from "./Components/Items/Grooming";
import Bowls from "./Components/Items/Bowls";
import Beddings from "./Components/Items/Beddings";
import Clothing from "./Components/Items/Clothing";
import Cart from "./Components/Cart";
import AllProduct from "./Components/Items/AllProduct";
import ViewProducts from "./Components/ViewProduct";
import Payment from "./Components/Payment";
import Search from "./Components/Search";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminHome from "./Components/Admin/AdminHome";
import AdminProduct from "./Components/Admin/AdminProduct";
import Users from "./Components/Admin/Users";
import ViewOrder from "./Components/Admin/ViewOrder";
import EditProduct from "./Components/Admin/EditProduct";
import AddProduct from "./Components/Admin/AddProduct";

export const Data = createContext();
const App = () => {
  const [userData, setUserData] = useState([]);
  const [login, setLogin] = useState(false);
  const [loginUser, setLoginUser] = useState({});
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState(Products);
  const [vieworder, setViewOrder] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Data.Provider
        value={{
          userData,
          setUserData,
          login,
          setLogin,
          loginUser,
          setLoginUser,
          product,
          setProduct,
          cart,
          setCart,
          vieworder,
          setViewOrder,
          search,
          setSearch,
        }}
      >
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cado" element={<Home />} />
          <Route path="/signin" element={<Singin />} />
          <Route path="/signup" element={<Registration />}></Route>
          <Route path="/dogfood" element={<DogFood />}></Route>
          <Route path="/catfood" element={<CatFood />}></Route>
          <Route path="/dogtreats" element={<DogTreats />}></Route>
          <Route path="/cattreats" element={<CatTreats />}></Route>
          <Route path="/healthcare" element={<HealthCare />}></Route>
          <Route path="/littersupplies" element={<LitterSupplies />}></Route>
          <Route path="/toys" element={<Toys />}></Route>
          <Route path="/walkessentials" element={<WalkEssentials />}></Route>
          <Route path="/grooming" element={<Grooming />}></Route>
          <Route path="/bowls" element={<Bowls />}></Route>
          <Route path="/beddings" element={<Beddings />}></Route>
          <Route path="/clothing" element={<Clothing />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<AllProduct />}></Route>
          <Route path="/viewproduct/:id" element={<ViewProducts />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/adminlogin" element={<AdminLogin />}></Route>
          <Route path="/admin" element={<AdminHome />}></Route>
          <Route path="/adminproduct" element={<AdminProduct />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editpro/:id" element={<EditProduct />} />
          <Route path="/users" element={<Users />} />
          <Route path="/vieworder" element={<ViewOrder />} />
        </Routes>
      </Data.Provider>
    </BrowserRouter>
  );
};

export default App;
