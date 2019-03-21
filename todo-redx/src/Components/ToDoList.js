import React from 'react';

class ToDoList extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    {
                        this.props.todos.map((todo,i)=>{
                            return <li key={i}>{todo} </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default ToDoList;