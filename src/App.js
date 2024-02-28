// src/App.js
import React from 'react';
import './App.css';
import Gallery from './component/Gallery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from './utils/constant';

const App = () => {

  return (
    <div className="App">
      <nav>
        <h1 style={{ display: "flex" }}><b>Gallery</b></h1>
      </nav>
      <h1>
        <b>Photo Gallery</b>
      </h1>
      <h5 style={{ color: "grey" }}>lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries</h5>
      <Gallery images={images} />
    </div>
  );
};

export default App;
