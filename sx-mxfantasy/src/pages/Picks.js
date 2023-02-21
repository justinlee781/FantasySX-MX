import * as React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import '../pages/Picks.css';


const names = ['Devyn', 'Brando', 'Brian', 'Jaimie', 'Pasky', 'Rob', 'Bob', 'Pedroski', 'Bethann', 'Justin', 'Christina', 'Russ'];
const numbers = [1055, 1034, 1030, 1023, 1022, 1019, 1016, 1015, 1010, 1002, 998, 987];

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
<Link to={`/ProPicks/${name.toLowerCase()}`}>
 <Button>{name}</Button>
</Link>


{numbers[index]}
</React.Fragment>
))}
</AccordionDetails>
</Accordion>
);
}

