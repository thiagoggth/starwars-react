import React from 'react';
import Logo from '../../components/Logo';

import {Link} from 'react-router-dom';

import './style.css';
const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="starwarsheader">
        <Logo isHomepage={true}/>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4" onclick="router.to('/filmes')">
            <Link to="" className="item">
              <h2 className="title">film</h2>
            </Link>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <Link to="" className="item">
              <h2 className="title">person</h2>
            </Link>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <Link to="" className="item">
              <h2 className="title">planets</h2>
            </Link>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <Link to="" className="item">
              <h2 className="title">species</h2>
            </Link>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <Link to="" className="item">
              <h2 className="title">starships</h2>
            </Link>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <Link to="" className="item">
              <h2 className="title">vehicles</h2>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home;