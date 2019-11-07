import React, { Component } from 'react';
import './AssignmentList.css';
import { useHistory } from "react-router-dom";
import Assignment from '../assignment/Assignment';

export default class AssignmentList extends Component {
  constructor(props) {
    super(props);
    this.state = { assignments: [] };
  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('Component is here');
    const url = `http://localhost:4000/assignment/list`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ assignments: data.assignments });
      })
      .catch(error => console.log(error));
  }

  render() {
    const assignmentList = this.state.assignments.map(item =>
      <Assignment key={item.stepId} item={item}/>
    )

    return (
      <div className="assignment-list">
        <h3>Assignment List</h3>
        <div className="table-header">
          <div>Patient</div>
          <div>Modality</div>
          <div>Status</div>
        </div>
        <ul className="assign-list">{assignmentList}</ul>
      </div>
    );
  }
}