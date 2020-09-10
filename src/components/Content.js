import React, {useContext} from 'react';
import About from './About';
import Works from './Works';
import Skills from './Skills';
import Experince from './Experince';
import Contact from './Contact';

const Content = (props) => {
  return (
    <main>
      <About />
      <Works />
      <Skills />
      <Contact />
    </main>
  )
}

export default Content;
