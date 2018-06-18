// @flow

import React from "react";

const CheckInfo = (props: {
  ...$Exact<Check>,
  handleFillEditWindow: Function,
  handleEditWindow: Function,
  deleteCheck: Function
}) => (
  <div>
    <h1>{props.name}</h1>
    <p>Uri: {props.uri}</p>
    <p>Interval: {props.interval} ms</p>
    <p>
      Availability:{" "}
      {props.polls.filter(poll => poll.availability === "UP").length /
        props.polls.length *
        100}%
    </p>
    <button
      onClick={() => {
        props.handleFillEditWindow({
          name: props.name,
          uri: props.uri,
          interval: props.interval
        });
        props.handleEditWindow(true);
      }}
    >
      Edit
    </button>
    <button onClick={() => props.deleteCheck({ name: props.name })}>
      Delete
    </button>
  </div>
);

export default CheckInfo;
