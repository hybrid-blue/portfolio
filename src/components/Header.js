import React, { useContext, useEffect, useState } from 'react'
import Carat from '../img/caret.svg';

const Header = (props) => {

  const [menu, setMenu] = useState(false);

  const goToSection = (e, id) => {
    window.history.pushState(null, id, `#${id}`)
    e.preventDefault();
    let target = document.querySelector(`#${id}`);
    let targetPos = target.offsetTop;
    window.scrollTo({
      left: 0,
      top: targetPos,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    setTimeout(() => {
      const text = document.querySelectorAll('.header-text')[0];
      text.style.opacity = 1;
      text.style.left = 0;
    }, 200)
  })

  const toggleMenu = () => {
    const elm = document.querySelectorAll('.mobile-menu__links')[0];



    console.log('Toggle Menu')
    console.log(menu)

    if(menu){
      elm.style.height = 0;
      setTimeout(() => {
        elm.style.display = "none";
      },250)
      setMenu(false);
    }else{
      elm.style.display = "flex";
      let itemHeight = elm.querySelectorAll('li')[0].offsetHeight;
      let itemCount = elm.querySelectorAll('li').length;
      elm.style.height = `${(itemHeight * itemCount)}px`
      setMenu(true);
    }





  }

  return (
    <header>

      <nav className="desktop-menu">
        <ul>
          <li><a onClick={(e) => goToSection(e,'about')} href="#about">About</a></li>
          <li><a onClick={(e) => goToSection(e,'projects')} href="#projects">Projects</a></li>
          <li><a onClick={(e) => goToSection(e,'skills')} href="#skills">Skills</a></li>
          <li><a onClick={(e) => goToSection(e,'contact')} href="#contact">Contact</a></li>
        </ul>
      </nav>
      <nav className="mobile-menu">
        <div class="mobile-menu__header" onClick={() => toggleMenu()}>
          <div><span  className="mobile-menu__header-text">Nav</span></div><div className="mobile-menu__icon"><img src={Carat} /></div>
        </div>
        <ul class="mobile-menu__links">
          <li><a onClick={(e) => goToSection(e,'about')} href="#about">About</a></li>
          <li><a onClick={(e) => goToSection(e,'projects')} href="#projects">Projects</a></li>
          <li><a onClick={(e) => goToSection(e,'skills')} href="#skills">Skills</a></li>
          <li><a onClick={(e) => goToSection(e,'contact')} href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-text">
        <h1>Aaron Ifill</h1>
        <span>Front End Developer</span>
      </div>
      <h3>Willing to take on any challenge, even if I have to make on myself...</h3>

    </header>
  )
}

export default Header;
