import React, { Component } from 'react';
import TodosList from './TodoList';
import Header from './Header';
import { connect } from 'react-redux';
import { SaveTodo, deleteTodo } from '../state-management/todo/action/todo.action';

export class TodoContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Verify the reducers state")
    console.log(this.props.allTodos)
    console.log(this.props.selectedToDo)
  }
  saveToDO = (title) => {
    const { dispatch, allTodos } = this.props;

    dispatch(SaveTodo({ id: allTodos.length + 1, title, completed: false }))

  }
  onRemoveItem = (todo) => {
    const { dispatch } = this.props;
    dispatch(deleteTodo(todo.id))
  }

  render() {
    const { allTodos, selectedToDo } = this.props;
    return (
      <div className="to-do-container">
        <Header title="dshfkhkds"></Header>
        <TodosList
          onRomveToDoItem={this.onRemoveItem}
          onSubmitToDo={this.saveToDO}
        ></TodosList>
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
export default connect(mapStateToProps)(TodoContainer);
