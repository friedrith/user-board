import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './Task.style'

class Task extends Component {
  render() {
    return (
      <g className={style.Task}>
        <rect
          className={style.background}
          x={this.props.x - (this.props.width / 2)}
          y={this.props.y - (this.props.height / 2)}
          width={this.props.width}
          height={this.props.height}
        />
        <text className={style.label} x={this.props.x} y={this.props.y} dominantBaseline="middle" fontSize="35" textAnchor="middle">Hello</text>
      </g>
    )
  }
}

Task.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
}

Task.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
}

export default Task
