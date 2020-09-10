import React, { useContext, useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const About = (props) => {

  const [status, setStatus] = useState(false);

  useEffect(() => {

    if(status){
      const image = document.querySelectorAll('.about-image')[0];
      const text = document.querySelectorAll('.about-text')[0];

      image.style.opacity = 1;
      image.style.left = 0;

      text.style.opacity = 1;
      text.style.right = 0;
    }

  }, [status]);

  window.addEventListener('scroll', (e) => {
    if(window.scrollY > 200){
      if(!status){
        setStatus(true);
      }
    }
  });

  return (
    <section>
      <Container className="section-content">
        <Row>
          <Col lg={3}>
            <img className="about-image" src="https://picsum.photos/200/200" />
          </Col>
          <Col lg={9}>
            <p className="about-text">
            Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor. Praesent tincidunt mi orci  in sollicitudin mi dapibus dapibus pellentesque habitant morbi tristique senectus et malesuada fames turpis egestas. Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor. Praesent tincidunt mi orci  in sollicitudin mi dapibus dapibus pellentesque habitant morbi tristique senectus et malesuada fames turpis egestas. Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor. Praesent tincidunt mi orci  in sollicitudin mi dapibus dapibus pellentesque habitant morbi tristique senectus et malesuada fames turpis egestas. Integer pharetra tellus varius, dictum erat vel, maximus tellus.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;
