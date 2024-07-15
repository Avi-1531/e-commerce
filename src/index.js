import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/Productcontext";
import { Filtercontextprovider } from "./context/Filtercontext";
import { CartProvider } from "./context/cartcontext";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

<AppProvider>
<Filtercontextprovider>
<CartProvider>

<App />
</CartProvider>
</Filtercontextprovider>
</AppProvider>
);

