import React from 'react';
import { useHistory } from "react-router-dom";

export default function Assignment(props) {
  const history = useHistory();

  function enterToAssign(studyId) {
    console.log('Enter to Assign');
    const studyUid = '1.3.12.2.1107.5.2.40.49105.30000019081215190600000000166';
    history.push(`/viewer/${studyUid}`);
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