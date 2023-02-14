import * as React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import '../pages/Picks.css';


const names = ['Devyn', 'Brian', 'Brando', 'Christina', 'Jaimie', 'Justin', 'Bethann', 'Bob', 'Pasky', 'Rob', 'Pete', 'Russ'];
const numbers = [601, 601, 594, 594, 592, 586, 586, 584, 582, 581, 577, 551];

export default function AccessibleTable() {
const [expanded, setExpanded] = React.useState(false);

const handleChange = () => {
setExpanded(!expanded);
};

return (
<Accordion expanded={expanded} onChange={handleChange}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
>
 Show Names
</AccordionSummary>
<AccordionDetails>
{names.map((name, index) => (
<React.Fragment key={name}>
<Link to={`./ProPicks/${name.toLowerCase()}.js`}>
  <Button>{name}</Button>
</Link>


{numbers[index]}
</React.Fragment>
))}
</AccordionDetails>
</Accordion>
);
}

