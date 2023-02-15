import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Devyn() {
  const [allNames, setAllNames] = React.useState([
    'Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5', 'Name 6', 'Name 7', 'Name 8', 'Name 9', 'Name 10',
    'Name 11', 'Name 12', 'Name 13', 'Name 14', 'Name 15', 'Name 16', 'Name 17', 'Name 18', 'Name 19', 'Name 20',
    'Name 21', 'Name 22', 'Name 23', 'Name 24', 'Name 25', 'Name 26', 'Name 27', 'Name 28', 'Name 29', 'Name 30',
    'Name 31', 'Name 32', 'Name 33', 'Name 34', 'Name 35', 'Name 36', 'Name 37', 'Name 38', 'Name 39', 'Name 40',
    'Name 41', 'Name 42', 'Name 43', 'Name 44', 'Name 45', 'Name 46', 'Name 47', 'Name 48', 'Name 49', 'Name 50',
  ]);
  const [selectedNamesRow1, setSelectedNamesRow1] = React.useState([]);
  const [selectedNamesRow2, setSelectedNamesRow2] = React.useState([]);

  const handleNameClick = (nameToAdd) => {
    const row1Length = selectedNamesRow1.length;
    const row2Length = selectedNamesRow2.length;

    if (row1Length < 6) {
      setSelectedNamesRow1((prevNames) => [...prevNames, nameToAdd]);
    } else if (row2Length < 6) {
      setSelectedNamesRow2((prevNames) => [...prevNames, nameToAdd]);
    }
  };

  const handleDeleteClick = (index, selectedNames) => {
    const newNames = [...selectedNames];
    newNames.splice(index, 1);

    return newNames;
  };

  const handleConfirmClick = () => {
    console.log('Selected names (row 1):', selectedNamesRow1);
    console.log('Selected names (row 2):', selectedNamesRow2);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: 1 }}>
        <h2>Available Names</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="available names">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allNames.slice(0, 12).map((name,
index) => (
<TableRow key={name}>
<TableCell component="th" scope="row">
{name}
</TableCell>
<TableCell align="right">
<Button variant="contained" color="primary" onClick={() => handleNameClick(name)}>
Select
</Button>
</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</TableContainer>
</Box>
<Box sx={{ flexGrow: 1 }}>
<h2>Selected Names (Row 1)</h2>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="selected names row 1">
<TableHead>
<TableRow>
<TableCell>Name</TableCell>
<TableCell align="right">Action</TableCell>
</TableRow>
</TableHead>
<TableBody>
{selectedNamesRow1.map((name, index) => (
<TableRow key={name}>
<TableCell component="th" scope="row">
{name}
</TableCell>
<TableCell align="right">
<IconButton aria-label="delete" onClick={() => setSelectedNamesRow1(handleDeleteClick(index, selectedNamesRow1))}>
<DeleteIcon />
</IconButton>
</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</TableContainer>
<h2>Selected Names (Row 2)</h2>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="selected names row 2">
<TableHead>
<TableRow>
<TableCell>Name</TableCell>
<TableCell align="right">Action</TableCell>
</TableRow>
</TableHead>
<TableBody>
{selectedNamesRow2.map((name, index) => (
<TableRow key={name}>
<TableCell component="th" scope="row">
{name}
</TableCell>
<TableCell align="right">
<IconButton aria-label="delete" onClick={() => setSelectedNamesRow2(handleDeleteClick(index, selectedNamesRow2))}>
<DeleteIcon />
</IconButton>
</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</TableContainer>
<Button variant="contained" color="primary" onClick={handleConfirmClick}>
Confirm Selection
</Button>
</Box>
</Box>
);
}

export default Devyn;