import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/home";
import About from "./Component/about";
import Dishes from "./Component/dishes";
import Menu from "./Component/menu";
import Reviewer from "./Component/reviewer";
import Order from "./Component/order";
import Footer from "./Component/footer";

ReactDOM.render(<Navbar />, document.getElementById("nav-bar"));
ReactDOM.render(<Home />, document.getElementById("home"));
ReactDOM.render(<About />, document.getElementById("about"));
ReactDOM.render(<Dishes />, document.getElementById("dishes"));
ReactDOM.render(<Menu />, document.getElementById("menu"));
ReactDOM.render(<Reviewer />, document.getElementById("reviewer"));
ReactDOM.render(<Order />, document.getElementById("order"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
