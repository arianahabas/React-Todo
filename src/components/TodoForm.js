//- `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
// -Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
// -Once a todo is submitted, the Todo List should re-render and show the added todo.


import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button `
    font-family: 'Recursive', sans-serif;
    border-radius: 5px;
    margin: 5px;
    padding: 8px;

`
const Style = styled.div`
    display: flex;
    flex-direction:column;
    width: 50%;
    align-items: center;
    padding: 10px;

    input{
        font-family: 'Recursive', sans-serif;
        margin: 5px;
    }

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
                    placeholder='Enter your task here' type='text' 
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