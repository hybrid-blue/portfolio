import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { PortfolioContext } from '../contexts/PortfolioContext';


const Display = ({display}) => {
  return(
    <div id="work-display">
      <div class="work-infomation">
        <h3>{display.name} - <a href={display.github}>GitHub</a></h3>
        <p>{display.desc}</p>
      </div>
    </div>
  )
}

const Works = (props) => {
  const { works } = useContext(PortfolioContext);

  const [status, setStatus] = useState(false);

  const [display, setDisplay] = useState({
    name: '',
    desc: '',
  })

  const displayWork = (id) => {
    const selected = works.filter(work => work.id === id);
    setDisplay(...selected)
  }

  useEffect(() => {

    if(status){
      const images = document.querySelector('#projects').querySelectorAll('.square-item');
      const count = images.length;

      var index = 0;

      function showImage(img){
        if(index < count){
          setTimeout(() => {
            img.style.opacity = 1;
            index++;
            showImage(images[index])
          }, 200)
        }
      }

      showImage(images[index])

    }

  }, [status]);

  window.addEventListener('scroll', (e) => {
    // console.log(window.scrollY);
    if(window.scrollY > 600){
      if(!status){
        setStatus(true);
      }
    }
  });


  return (
    <section id="projects" className="section">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="section-title">Projects</h2>
          </Col>
          <Col md={12}  className="section-content">
            <ul className="square-list square-list_narrow">
              {works.map(work => (
                <li key={work.id} className="square-item square-item_border" onClick={() => displayWork(work.id)}>
                  <div className="border-one"></div>
                    <img src={work.image} />
                  <div className="border-two"></div>
                </li>
              ))}
            </ul>
            {display.name.length > 0 ? <Display display={display} /> : null}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Works;
