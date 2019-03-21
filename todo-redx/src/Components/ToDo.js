import React from 'react';

class ToDo extends React.Component{
    render() {
        return(
            <div>
                <input type="text" onChange={this.props.change}/>
                <button onClick={this.props.click}>Add</button>
            </div>
        );
    }
}
export default ToDo;