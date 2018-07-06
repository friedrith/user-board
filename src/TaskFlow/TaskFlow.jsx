import React, { Component } from 'react'
import style from './TaskFlow.style'
import Task from './Task'

class TaskFlow extends Component {
  render() {
    return (
      <div className={style.TaskFlow}>
        <svg>
          <Task x={100} y={100} width={150} height={55} />
        </svg>
      </div>
    )
  }
}

export default TaskFlow
