import React, { Component } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render () {
    const { content, test } = this.props;
    return (
      <li onClick={this.handleClick}>{test} - {content}</li>
    )
  }
  handleClick() {
    const { handleItemDelete, index } = this.props;
    handleItemDelete(index)
  }
}
TodoItem.propTypes = {
  content: PropTypes.string,
  handleItemDelete: PropTypes.func, // 值为function类型
  index: PropTypes.number,
  test: PropTypes.string.isRequired // test值必传且为字符串
}
TodoItem.defaultProps = {
  test: 'hello world'
}
export default TodoItem