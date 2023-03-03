import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Box } from '@mui/material';
import { Delete } from '@mui/icons-material';
import './ChatBox.css';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#fff',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#f5f5f5',
  },
  input: {
    flexGrow: 1,
    marginRight: '16px',
  },
  messagesContainer: {
    flexGrow: 1,
    overflow: 'auto',
    padding: '16px',
  },
});

const Chatbox = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim() !== '') {
      const newMessage = { text: inputValue, timestamp: new Date() };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handleDeleteClick = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  };

  return (
    
    <Box className={classes.root}>
      <Box className={classes.inputContainer}>
        <TextField
          className={classes.input}
          variant="outlined"
          label="Enter message"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" onClick={handleSendClick}>
          Send
        </Button>
      </Box>
      <Box className={classes.messagesContainer}>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index}>
              <ListItemText primary={message.text} secondary={message.timestamp.toLocaleString()} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteClick(index)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Chatbox;
