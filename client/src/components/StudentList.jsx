import React from 'react';

class StudentList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listOfStudents: 'inProgress',
    }
    // this.showInProgress = this.showInProgress.bind(this);
    // this.showIsResolved = this.showIsResolved.bind(this);
  }

  // showInProgress(){
  //   this.setState({
  //     listOfStudents: 'inProgress',
  //   })
  // }
  //
  // showIsResolved(){
  //   this.setState({
  //     listOfStudents: 'isResolved',
  //   })
  // }
  //
  //Render two buttons one each method above
  //Depending on the state, InProgress will render or IsResolved will render
  //Before doing all that, make sure this page is currently works.

  render(){
    return (
      <div className = 'studentList'>

        {this.props.studentDataLoaded ?
          {/* Did the data load? If so render the two types of list below*/}

        {/* List of students that are a priority */}
        (<ul className = 'isPriority'>
          {this.props.studentList.map(student => {
            return (
              {/* This will return li items for only students that are a priority. The key of each li will be the student's id and
              each li will also have a button. When the button is clicked it will invoke the currentprofile method (found on profile controller)
              and pass that student's id as an argument*/}
              {student.isPriority ?
              (<li key = {student.studid}><button className = 'button' onClick = {() => this.props.currentProfile(student.studid)}>
              {/*Show student's first and last names*/}
              {student.first_name +  " " + student.last_name}</button></li>)
              : null}
            )
          })}
        </ul>

        {/* List of students that are not a priority */}
        <ul className = 'notPriority'>
          {this.props.studentList.map(student => {
            return (
              {/* To check if they are not a priority. */}
              {!student.isPriority ?
              (<li key = {student.studid}><button className = 'button' onClick = {() => this.props.currentProfile(student.studid)}>
              {student.first_name +  " " + student.last_name}</button></li>)
              : null}
            )
          })}
        </ul>)

        {/*If the student data didnt load, render the below h2*/}
        : (<h2> Still Loading Student Data </h2> )}

      </div>
    )
  }



}


export default StudentList;