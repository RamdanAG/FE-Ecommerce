import React, { useState } from 'react';
import '../../css/HomePage/Main.css';
import "../../css/index.css";
import { Link } from 'react-router-dom';

import Slide4 from "../../../public/asset/image/Slider/Slide4.webp";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
    <div className='section-header'>
      <div className='section-header-content'>
          <img src={Slide4} alt="" />
          <div className="section-header-content-text">
            <ul>
              <li><a href="">Kaos</a></li>
              <li><a href="">Unisex</a></li>
              <li><a href="">Kolaborasi</a></li>
            </ul>
            <a href="/Women">
            <h1>DAPATKAN KAOS TERBARU JUJUTSU KAISEN x HAKKOI</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur veniam sapiente laboriosam maxime ad animi aut sed perferendis enim quo?</p>
            <a href=""><button>Cek Selangkapnya</button></a>
            </a>
          </div>
      </div>
    </div>

    </>
  );
};

export default Main;
