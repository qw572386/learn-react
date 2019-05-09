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
  // 组件从父组件接收参数
  // 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
  componentWillReceiveProps() {
    console.log('todoItem componentWillReceiveProps')
  }
  // 组件将被移除页面前执行
  componentWillUnmount() {
    console.log('todoItem componentWillUnmount')
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