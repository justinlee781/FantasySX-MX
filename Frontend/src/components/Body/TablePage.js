import React from 'react';
import { makeStyles } from '@mui/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const useStyles = makeStyles({
container: {
backgroundColor: '#f5f5f5',
height: '100vh',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
},
table: {
backgroundColor: '#fff',
border: '1px solid #ccc',
borderRadius: '5px',
boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
fontFamily: "'Roboto Mono', monospace",
maxWidth: '100%',
},
headerCell: {
backgroundColor: '#0077c0',
color: '#fff',
fontWeight: 'bold',
textTransform: 'uppercase',
},
});

const TablePage = () => {
const classes = useStyles();

// Sample data for the table
const rows = [
{ id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '555-1234' },
{ id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '555-5678' },
{ id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-9012' },
{ id: 4, name: 'Sarah Lee', email: 'sarah.lee@example.com', phone: '555-3456' },
{ id: 5, name: 'Mike Brown', email: 'mike.brown@example.com', phone: '555-7890' },
{ id: 6, name: 'Emily Davis', email: 'emily.davis@example.com', phone: '555-2345' },
{ id: 7, name: 'Tom Wilson', email: 'tom.wilson@example.com', phone: '555-6789' },
{ id: 8, name: 'Jessica Lee', email: 'jessica.lee@example.com', phone: '555-0123' },
{ id: 9, name: 'David Kim', email: 'david.kim@example.com', phone: '555-4567' },
{ id: 10, name: 'Maria Martinez', email: 'maria.martinez@example.com', phone: '555-8901' },
];

return (
    <div className={classes.container}>
      <h1>Top 10 of the week</h1>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.headerCell}>ID</TableCell>
              <TableCell className={classes.headerCell}>Name</TableCell>
              <TableCell className={classes.headerCell}>Email</TableCell>
              <TableCell className={classes.headerCell}>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TablePage