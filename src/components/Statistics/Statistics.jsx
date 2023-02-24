import { PropTypes } from 'prop-types';
import css from './Statistics.module.css'
import getRandomHexColor from 'utils/getRandomColor';


function Statistics( {title, stats}) {
  const color = getRandomHexColor();
  return <section className={css.section}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statList}>
    {stats.map(({id, label, percentage})=>(
     <li key={id} className={css.statItem} backgroundColor = {color} >
     <span>{label}</span> 
     <span>{percentage}</span>
     </li>
     ))
}
    </ul>
  </section>;  
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
  }))
};

export default Statistics;
