import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements, 
  Route, 
  Outlet, 
  RouterProvider 
} from 'react-router-dom';

import Navbar from './components/navbar';

import {Cart, Shop, Contact} from "./pages"

import "./App.css";
import { ShopContextProvider } from './context/shop-context';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Shop />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  )
  return (
    <div className="App">
      <ShopContextProvider>
        <RouterProvider router={router}/>
      </ShopContextProvider>
    </div>
  )
}

const Root = () =>{
  return <>
    <Navbar />
    <div>
      <Outlet />
    </div>
  </>
}

export default App;
