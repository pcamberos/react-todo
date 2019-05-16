import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function App() {
  return (
    //Esto es jsx
    <div>
      <Typography variant="h1" align="center" gutterBottom> 
        Todos!
      </Typography>

      <TextField type="text" placeholder="Write Here!" margin="normal" variant="outlined">

      </TextField>  
    </div>
  
  );
}

export default App;
