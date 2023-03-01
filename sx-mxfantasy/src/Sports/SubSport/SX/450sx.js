import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const riders = [
  'Jason Anderson',
  'Ken Roczen',
  'Chase Sexton',
  'Eli Tomac',
  'Cooper Webb',
  'Christian Craig',
  'Dean Wilson',
  'Benny Bloss',
  'Joey Savatgy',
  'Aaron Plessinger',
  'Justin Barcia',
  'Colt Nichols',
  'Justin Hill',
  'Justin Cooper',
  'Shane McElrath',
  'Josh Hill',
  'Grant Harlan',
  'Joshua Cartwright',
  'Cade Clason',
  'Justin Starling',
];

const RiderTable = () => {
  const [selectedRiders, setSelectedRiders] = useState([]);

  const handleRiderClick = (riderName) => {
    if (selectedRiders.includes(riderName)) {
      setSelectedRiders(selectedRiders.filter((name) => name !== riderName));
    } else if (selectedRiders.length < 6) {
      setSelectedRiders([...selectedRiders, riderName]);
    }
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {riders.map((riderName) => (
            <TableRow key={riderName} onClick={() => handleRiderClick(riderName)} selected={selectedRiders.includes(riderName)}>
              <TableCell>{riderName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p>Selected riders: {selectedRiders.join(', ')}</p>
    </TableContainer>
  );
};

export default RiderTable;
