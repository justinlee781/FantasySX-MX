import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const names = [
'John', 'Jane', 'James', 'Joan', 'Jake', 'Julie', 'Jack', 'Jenny', 'Jessie', 'Jeremy', 'Janet',
'Keith', 'Katie', 'Karen', 'Kyle', 'Kim', 'Kenny', 'Kevin', 'Kylie', 'Kaitlyn', 'Karen', 'Kelvin'
];

export default function AccessibleTable() {
return (
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="table">
<TableHead>
<TableRow>
<TableCell>Name</TableCell>
<TableCell align="right">Name</TableCell>
<TableCell align="right">Name</TableCell>
<TableCell align="right">Name</TableCell>
<TableCell align="right">Name</TableCell>
<TableCell align="right">Name</TableCell>
<TableCell align="right">Name</TableCell>
<TableCell align="right">Name</TableCell>
<TableCell align="right">Name</TableCell>
<TableCell align="right">Name</TableCell>
<TableCell align="right">Name</TableCell>
</TableRow>
</TableHead>
<TableBody>
<TableRow>
{names.slice(0, 11).map(name => (
<TableCell key={name} align="right">{name}</TableCell>
))}
</TableRow>
<TableRow>
{names.slice(11).map(name => (
<TableCell key={name} align="right">{name}</TableCell>
))}
</TableRow>
</TableBody>
</Table>
</TableContainer>
);
}