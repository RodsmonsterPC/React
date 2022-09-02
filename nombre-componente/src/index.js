import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Hello from "./hello"
import Catalog from "./catalogo"



const idRoot = document.getElementById("root")
const root = ReactDOM.createRoot(idRoot);
root.render(<Catalog/>);


