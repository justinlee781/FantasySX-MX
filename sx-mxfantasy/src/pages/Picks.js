import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const names = [
'Devyn', 'Brian', 'Justin', 'Beth', 'Russ', 'Rob', 'Brando', 'Pete', 'Bob', 'Chriatin', 'Jaimie'
];

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
              <TableCell>{name}</TableCell>
              <TableCell align="right">{index + 1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
