import React, {Component} from 'react';
import './AssignmentList.css';

export default class AssignmentList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('Component is here');
    const url = `http://localhost:4000/assignment/list`;
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="assignment-list">Test markup</div>
    )
  }
}