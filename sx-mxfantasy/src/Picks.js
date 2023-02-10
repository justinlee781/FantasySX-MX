import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const names = [
  'John',
  'Jane',
  'Jim',
  'Jill',
  'Jack',
  'Jenny',
  'Jake',
  'Joan',
  'Joe',
  'Jerry',
  'Julie',
];

const Picks = () => {
  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableBody>
        {names.map((name, index) => (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              <Button href="/LandingPage">{name}</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Picks;