import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sideBar";
import Nowtrending from "./components/nowTrending";
import Navbar from "./components/navbar";
import LikedMost from "./components/like";

export default function App() {
  return (
    <div className="pagecontainer">
      <Navbar />
       <Sidebar/>
       <Nowtrending/>
       <LikedMost/>
    </div>
  );
}


