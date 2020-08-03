//- `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
// -Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
// -Once a todo is submitted, the Todo List should re-render and show the added todo.


import React from 'react';
import App from '../App'
import styled from 'styled-components'

const StyledButton = styled.button `
    font-family: 'Recursive', sans-serif;

`
const Style = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`

class TodoForm extends React.Component {

    constructor() {
        super()
        this.state={
            itemText:''
        }   
    }

    handleChanges = e => {
        this.setState({
            itemText: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addItem(this.state.itemText)
        this.setState({
            itemText: ''
        })
    }

    
    render() {
        return (
            <Style>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    placeholder='Enter new task here' type='text' 
                    name='itemText' 
                    onChange={this.handleChanges} 
                    value={this.state.itemText}
                    >
                    </input>
                    <StyledButton>Add</StyledButton>
                </form>
               <StyledButton onClick={this.props.clearCompleted}>Clear Completed </StyledButton>
            </Style>
        )
    }
}
    
    
    
export default TodoForm