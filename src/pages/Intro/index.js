import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';

import Logo from '../../components/Logo';

import './style.css';
const Intro = ({router}) => {

  const history = useHistory();
  useEffect(() => {
    setTimeout(()=> {
      history.push('/home');
    }, 10000);
  }, [history])

  return (
    <div className="starwars">
      <Logo />
      <h1 className="byline">Seja Bem-Vindo</h1>
    </div>
  );
}

export default Intro;