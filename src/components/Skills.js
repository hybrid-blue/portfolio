import React, { useContext, useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { PortfolioContext } from '../contexts/PortfolioContext';

const Works = (props) => {
  const { skills } = useContext(PortfolioContext);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if(status){
      const skillsElm = document.querySelectorAll('.list-rating');
      skillsElm.forEach((skillElm, i) => {
        if(i === 0){
          skillElm.style.opacity = 1;
          skillElm.style.left = 0;
        }else{
          skillElm.style.opacity = 1;
          skillElm.style.right = 0;
        }
      })
    }
  }, [status]);


  window.addEventListener('scroll', (e) => {
    if(window.scrollY > 1100){
      if(!status){
        setStatus(true);
      }
    }
  });

  return (
    <section id="skills" className="section">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="section-title">Skills</h2>
          </Col>
          <Col md={12} className="section-content">
            <div className="list-wrapper">
              {skills.map((skill, i) => (
                <ul className={i === 0 ? "list-rating slide-in--left" : "list-rating slide-in--right"}>
                  {skill.map(item => (
                    <li key={item.id}>
                      <div className="rating-name">{item.name}</div>
                      <div className="rating-wrapper">
                        <div className={"rating rating-"+item.rating}></div>
                      </div>
                      <div className="rating-number">{item.rating}</div>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Works;

// {skills.map(skill => (
//   <li key={skill.id} className="square-item square-item_border">
//     <div className="border-one"></div><img src={skill.image} /><div className="border-two"></div>
//   </li>
// ))}
