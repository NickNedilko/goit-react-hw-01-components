import { PropTypes } from 'prop-types';
import { Card, Title, StatList, StatItem, Label, Percentage } from './Statistics.styled';
import getRandomHexColor from 'utils/getRandomColor';

// import css from './Statistics.module.css'




function Statistics( {title, stats}) {
  return (<Card>
   {title && <Title>{title}</Title>} 
    <StatList>
    {stats.map(({id, label, percentage})=>(
    <StatItem key={id} backgroundColor={getRandomHexColor()}>
     <Label>{label}</Label> 
     <Percentage>{percentage}</Percentage>
     </StatItem>
     ))
}
    </StatList>
  </Card>  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
  }))
};

export default Statistics;
