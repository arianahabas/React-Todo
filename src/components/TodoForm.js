//- `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
// -Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
// -Once a todo is submitted, the Todo List should re-render and show the added todo.


import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super()
        this.state={
            itemText:''
        }
    }

    handleChanges = e => {
        this.setState({
            itemText: e.target.value
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
            <form onSubmit={this.handleSubmit}>
                <input 
                placeholder='Enter new task here' type='text' 
                name='itemText' 
                onChange={this.handleChanges} 
                value={this.state.itemText}>
                </input>
                <button>Add</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}
    
    
    
export default TodoForm