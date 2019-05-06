import React, { Component, Fragment } from 'react'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleSubmit() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
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
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleDelete.bind(this, index)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
            
        )
    }
}
export default TodoList