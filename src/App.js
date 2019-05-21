import React from 'react';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

/*MODO STATEFULL */
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value:"",
      todos: []
    }; 
  }

  updateValue = e  => {
    this.setState({
      value: e.target.value
    });
  };

  saveTodo = () =>{
    const todos = this.state.todos;
    todos.push({
      value: this.state.value,
      completed: false
    });
    this.clearValue();  
    this.setState({
      todos
    });
  };

  clearValue = () =>{
    this.setState({
      value:""
    });
  }

  deleteTodo = (index) => {
    const todos = this.state.todos;
    todos.splice(index,1);
    this.setState({
      todos
    });
  }

  toggleCompleted = (index) => {
    const todos = this.state.todos;
    todos[index].completed = !todos[index].completed;
    this.setState({
      todos
    });
    console.log(this.state.todos);
  }

  render(){
    return (
      //Esto es JSX
      <React.Fragment>
          <Typography variant="h2" align="center" gutterBottom> ¡Todos! </Typography>
  
          <div align="center">
            <TodoForm 
              onChange={this.updateValue } 
              value={this.state.value} 
              saveTodo={this.saveTodo} />
          </div>

        <Grid container justify="center">
          <Grid item md={8}>
            <TodoList
                todos={this.state.todos}
                deleteTodo = {this.deleteTodo}
                toggleCompleted = {this.toggleCompleted}/>        
          </Grid>
        </Grid>
          
  
          
    </React.Fragment>
    );
  }
  
}

export default App;

/*
MODO STATELESS
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

export default App;*/

