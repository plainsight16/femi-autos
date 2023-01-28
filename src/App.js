import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements, 
  Route, 
  Outlet, 
  RouterProvider 
} from 'react-router-dom';

import Navbar from './components/navbar';

import {Cart, Shop} from "./pages"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Shop />}/>
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router}/>
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
