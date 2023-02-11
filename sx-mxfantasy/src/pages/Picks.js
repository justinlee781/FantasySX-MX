import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import '../pages/Picks.css';

const names = [
'Devyn', 'Brian', 'Brando', 'Christina', 'Jaimie', 'Justin', 'Bethann', 'Bob', 'Pasky', 'Rob','Pete', 'Russ` ,'
];
const numbers = [601, 601, 594, 594, 592, 586, 586, 584, 582, 581, 577, 551];

export default function AccessibleTable() {
return (
<TableContainer component={Paper}>
<Table aria-label="table">
<TableHead>
<TableRow>
<TableCell>Name</TableCell>
<TableCell align="right">Number</TableCell>
</TableRow>
</TableHead>
<TableBody>
{names.map((name, index) => (
<TableRow key={name}>
<TableCell>
  <Button>{name}</Button>
</TableCell>
<TableCell align="right">{numbers[index]}</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</TableContainer>
);
}