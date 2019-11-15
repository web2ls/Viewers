import React from 'react';
import { useHistory } from "react-router-dom";

export default function Assignment(props) {
  const history = useHistory();

  function enterToAssign(studyId) {
    console.log('Enter to Assign');
    history.push(`/viewer/${studyId}`);
  }

  return (
    <>
      <li
        key={props.item.stepId}
        className="assign-item"
        onClick={() => enterToAssign(props.item.studyUid)}
      >
        <div>{props.item.patient}</div>
        <div>{props.item.modality}</div>
        <div>{props.item.status}</div>
      </li>
    </>
  )
}