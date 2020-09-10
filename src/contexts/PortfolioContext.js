import React, { createContext, useState } from 'react';

import angular from '../img/angular.svg';
import CSS3 from '../img/CSS3.svg';
import HTML5 from '../img/HTML5.svg';
import javascript from '../img/javascript.svg';
import vuejs from '../img/vuejs.svg';
import react from '../img/react.svg';
import nodejs from '../img/nodejs.svg';
import jquery from '../img/jquery.svg';

export const PortfolioContext = createContext();

const PortfolioContextProvider = (props) => {

  const [skills] = useState([
    [
      {name: 'Javascript', image: javascript, rating: 10, id: 1},
      {name: 'HTML 5', image: HTML5, rating: 9, id: 2},
      {name: 'CSS3', image: CSS3, rating: 9, id: 3},
      {name: 'jQuery', image: jquery, rating: 9, id: 4},
    ],
    [
      {name: 'React', image: react, rating: 8, id: 5},
      {name: 'VueJs', image: vuejs, rating: 7, id: 6},
      {name: 'NodeJS', image: nodejs, rating: 8, id: 7},
      {name: 'Anuglar', image: angular, rating: 6, id: 8},
    ]
  ])

  const [works] = useState([
    {name: 'KatsuJS', image: 'https://picsum.photos/200/200', github: 'https://github.com/hybrid-blue/katsuJS', desc: 'Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor.', id: 1},
    {name: 'Valykrie Isometric Engine', image: 'https://picsum.photos/200/200', github: 'https://github.com/hybrid-blue/Valkyrie-Isometric-Engine', desc: 'Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor.', id: 2},
    {name: 'Valykrie Map Maker', image: 'https://picsum.photos/200/200', github: 'https://github.com/hybrid-blue/valkyrie-map-maker', desc: 'Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor.', id: 3},
    {name: 'Vue Budget Planner', image: 'https://picsum.photos/200/200', github: 'https://github.com/hybrid-blue/vue-buget-planner', desc: 'Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor.', id: 4},
  ])

  return (
    <PortfolioContext.Provider value={{works, skills}}>
      {props.children}
    </PortfolioContext.Provider>
  )
}

export default PortfolioContextProvider;
