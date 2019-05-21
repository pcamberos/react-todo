import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const TodoList = (props) => {
    const {todos, deleteTodo, toggleCompleted} = props;
    const listItems = todos.map ((todo, index) => {
        return(
            <ListItem 
                dense 
                button 
                key={index} 
                onClick={() => toggleCompleted(index)}>
            <Checkbox 
                checked={todo.completed}>
            </Checkbox>
            <ListItemText 
                primary={todo.value} >
            </ListItemText  >
            <ListItemSecondaryAction>
            <IconButton 
                onClick={() => deleteTodo(index)}>              
                <DeleteIcon/>
            </IconButton>
            </ListItemSecondaryAction>
            
        </ListItem>
        )
    });

    return(
        <List>
            {listItems}
        </List>
    )
};

export default TodoList;