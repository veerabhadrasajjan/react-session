import React, { Component } from 'react';
import { connect } from 'react-redux';


export class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoInput: ''
        }
    }

    todoInputHandler = (e) => {
        this.setState({ toDoInput: e.target.value })
    }
    onSubmitToDO = () => {
        this.props.onSubmitToDo(this.state.toDoInput);
        this.setState({ toDoInput: '' })
    }
    removeToDoItem = (toDoItem) => {
        this.props.onRomveToDoItem(toDoItem);
    }

    render() {
        return (
            <div className="to-do-list">
                <div>
                    <input type="text" value={this, this.state.toDoInput} onChange={(e) => this.todoInputHandler(e)}></input>
                    <button type="button" onClick={() => this.onSubmitToDO()}>Add ToDo</button>
                </div>
                <ul>
                    {
                        this.props.allTodos.map((todo, index) => {
                            return <li key={index}>
                                {todo.title}
                                <button onClick={() => { this.removeToDoItem(todo) }}>Remove</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { allTodos, selectedToDo } = state.todo;
    return {
      allTodos,
      selectedToDo
    }
  }
  export default connect(mapStateToProps)(TodosList);
  