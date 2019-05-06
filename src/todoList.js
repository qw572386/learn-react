import React, { Component, Fragment } from 'react'
import TodoItem from './todoItem'
import './style.css'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleChange(e) {
        // this.setState({
        //     inputValue: e.target.value
        // })
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }
    handleSubmit() {
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
    handleDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        // this.setState({
        //     list: list
        // })
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return { list }
        })
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <Fragment key={index}>
                    <TodoItem  content={item} index={index} handleItemDelete={this.handleDelete}/>
                    {
                        /*
                         *<li key={index} onClick={this.handleDelete.bind(this, index)}>{item}</li>
                         */
                    }
                </Fragment>
            )
        })
    }
    render() {
        return (
            <Fragment>
                <div>
                    <h2>TodoList</h2>
                </div>
                <div>
                    <label htmlFor="todoListInput">请输入：</label>
                    <input id="todoListInput" className="input" type="text" onChange={this.handleChange} value={this.state.inputValue}/>
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
            
        )
    }
}
export default TodoList