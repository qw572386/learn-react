import React, { Component, Fragment } from "react";
import "./style.css";
import { connect } from 'react-redux'

const TodoList = (props) => {
  const { inputValue, list, changeInputValue, handleClick, handleDelete } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index} onClick={() => handleDelete(index)}>{item}</li>
          })
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick() {
      const action = {
        type: 'add_todo_item'
      }
      dispatch(action)
    },
    handleDelete(index) {
      const action = {
        type: 'delete_todo_item',
        index
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
