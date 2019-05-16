import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function App() {
  return (
    //Esto es jsx
    <React.Fragment>
        <Typography variant="h2" align="center" gutterBottom> ¡Todos! </Typography>

        <div align="center">
          <TextField type="text" placeholder="Write Here!" margin="normal" variant="outlined"></TextField>  
        </div>

        <List>
        {[0, 1, 2, 3].map(value => (
            <ListItem dense button>
            <Checkbox></Checkbox>
            <ListItemText primary={`Opción ${value + 1}`} ></ListItemText>
            <ListItemSecondaryAction>
              <IconButton>
                <DeleteIcon/>
              </IconButton>
            </ListItemSecondaryAction>
            <DeleteIcon></DeleteIcon>
        </ListItem>
        ))}
        </List>
  </React.Fragment>
  );
}

export default App;
