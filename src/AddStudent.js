import logo from './logo.svg'
import React, { Component } from 'react';
import './App.css';


export class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        firstName: ""
      }
    }
  }


  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }



  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  handleChange(e) {
    const { student } = this.state;
    let name = e.target.name;
    let value = e.target.value;
    student[name] = value;

    this.setState({ ...student })
  }

  handleCheckboxFields(e) {
    const { student } = this.state;
    let name = e.target.name;
    let value = e.target.checked;
    student[name] = value;

    this.setState({ ...student })
  }

  onSaveStudent(e) {
    e.preventDefault()
    const { student } = this.state;
    this.props.onSave(student)
  }

  render() {
    const { orgID, onSave } = this.props
    const { student } = this.state;
    return (
      <div className="App">
        <h1>Add Student With OrgID :{orgID}</h1>

        <form onSubmit={(e) => this.onSaveStudent(e)} >
          <lable>First Name</lable>
          <input type='text' name="firstName" value={student.firstName} onChange={(e) => this.handleChange(e)}></input>

          <lable>Last Name</lable>
          <input type='text' name="lastName" value={student.lastName} onChange={(e) => this.handleChange(e)}></input>


          <lable>Is Active</lable>
          <input type='checkbox' name="isActive" checked={student.isActive} onChange={(e) => this.handleCheckboxFields(e)}></input>

          <button type='submit'>Save</button>
        </form>

      </div>
    )
  }
}
