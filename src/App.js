import logo from './logo.svg'
import React, { Component } from 'react';
import './App.css';
import { AddStudent } from './AddStudent';
import TodoContainer from './ToDo/TodoContainer';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OrgnazationID: 45
    }

    this.addStudent = this.addStudent.bind(this)
  }
  componentDidMount() {

  }
  componentWillMount() {

  }

  componentDidUpdate() {

  }

  componentWillReceiveProps() {

  }

  addStudent(student) {
    alert(JSON.stringify(student))
    this.setState({ OrgnazationID: 90 })
  }

  render() {
    return (
      <div className="App">
        <TodoContainer></TodoContainer>
        {/* <h1>Hello from Create React App</h1>
        {this.state.item}
        <button onClick={() => this.addPlus()}>add</button>

        <AddStudent orgID={this.state.OrgnazationID} onSave={this.addStudent}></AddStudent> */}
      </div>
    )
  }
}



export default App;