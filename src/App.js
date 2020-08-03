import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import styled from 'styled-components'

const StyledContainer = styled.div`
  background-color: red;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: todoList
    }
  }
  toggleItem = (id) => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item, 
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  }

  addItem = (itemName) =>{
    const newItem ={
      task: itemName,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      todoList:[...this.state.todoList, newItem]
    })
  }

  render() {
    return (
      <StyledContainer>
        <h2>Lets get $hiT done!</h2>
        <TodoForm addItem={this.addItem}/>
        <TodoList 
        toggleItem={this.toggleItem} 
        todoList={this.state.todoList} />
      </StyledContainer>
    );
  }
}

export default App;
