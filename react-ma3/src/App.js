// Import and return the Layout component in src/App.js.

import React from "react";
import Heading from "./components/layout/Heading";
import HomeContent from "./components/layout/HomeContent";
import Layout from "./components/layout/Layout";
import LoginForm from "./components/layout/LoginForm";
import NewsList from "./components/layout/NewsList";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import News from "./components/news/News";
import "./App.css";

function App() {
  return (
    <Layout>
      <div className="App">
       <Heading title="Title from prop"/>

       <NewsList>
         
       </NewsList>
      
      </div>
    </Layout>
  );
}

export default App;
