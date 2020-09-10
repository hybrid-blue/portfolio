import React, {useContext, useEffect, useState} from 'react';
import { PortfolioContext } from '../contexts/PortfolioContext';


const Display = ({display}) => {
  return(
    <div id="work-display">
      <h3>{display.name}</h3>
      <p>{display.desc}</p>
    </div>
  )
}

const Experince = (props) => {
  const { works } = useContext(PortfolioContext);

  const [display, setDisplay] = useState({
    name: '',
    desc: '',
  })


  const displayWork = (id) => {
    const selected = works.filter(work => work.id === id);
    setDisplay(...selected)
  }

  return (
    <section id="experince" className="section">
      <h2 className="section-title">Experince</h2>
      <div className="section-content">
        <ul className="square-list square-list_narrow">
          {works.map(work => <li key={work.id} className="square-item square-item_selectable" onClick={() => displayWork(work.id)}>{work.name}</li>)}
        </ul>
        {display.name.length > 0 ? <Display display={display} /> : null}
      </div>
    </section>
  )
}

export default Experince;
