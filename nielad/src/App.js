import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Product from "./components/Product";
import ListaUsuarios from "./components/ListaUsuarios";
import Private from "./components/Private";
import Nav from "./components/Nav";
import { useState } from "react";
import Login from './components/Login'
import Add from './components/Add'

const App = () => {
  if(!window.sessionStorage.getItem('loggedAppUser')){
    window.sessionStorage.setItem(
      'loggedAppUser', JSON.stringify({})
    )
 }




 

  const session = useState(window.sessionStorage.getItem('loggedAppUser')).shift();

  console.log(session)

  return (
    <div>
      {Nav()}

      <Routes>
       
        <Route
          path="/"
          element={session.length > 4 ? <Navigate to="/home" /> : <Login />}
        />
        <Route path="/product" element={<Product />} />
        <Route
          path="/private"
          element={session.length < 4 ? <Navigate to="/" /> : <Private />}
        />
        <Route
          path="/home"
          element={session.length < 4 ? <Navigate to="/" /> : <ListaUsuarios />}
        />
       
        <Route path="/add" element={<Add />} />
        ;
      </Routes>
    </div>
  );
};
export default App;
