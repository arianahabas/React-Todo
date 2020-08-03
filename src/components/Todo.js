//`<Todo />` is a component that takes in the `todo` data and displays the task to the screen.// 

import React from 'react';
import styled from 'styled-components'

const Style = styled.div `
    border: 2px solid black;
    padding: 10px;
    margin: 10px;
    color: white;
    text-align: center;
    border-radius: 15px;
    font-family: 'Recursive', sans-serif;
    box-shadow: 1px 2px;
    


    &.completed {
    text-decoration: line-through;
    color: grey;
  }
`

const Item = props => {
    return (
      <Style 
      onClick={()=> props.toggleItem(props.item.id)} 
      className= {`item${props.item.completed ? ' completed' : ''}`}>
        <div>{props.item.task}</div>
      </Style>
    );
  };
  
  export default Item;