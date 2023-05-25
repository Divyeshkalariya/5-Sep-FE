import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';

import Layout from "./Layout";
import Home from "./componants/Home";
import About from "./componants/About-us";
import Blog from "./componants/Blog";
import Contact from "./componants/Contact-us";
import Error from "./Page-not-found";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/About-us" element={<About/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contact-us" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
