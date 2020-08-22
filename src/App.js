import React from "react";
import "./App.css";
import {  Switch, Route } from "react-router-dom";

//COMPONENTS
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import MyList from "./Components/MyList/MyList";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mylist" component={MyList} />
      </Switch>
    </div>
  );
}

export default App;
