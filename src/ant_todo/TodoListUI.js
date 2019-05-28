import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{margin: "10px 0 0 10px"}}>
//         <Input 
//           placeholder="please input" 
//           value={this.props.inputValue} 
//           style={{width: "300px", marginRight: "10px"}}
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         <List
//           style={{marginTop: "10px", width: "300px"}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }
// 使用无状态组件模式
const TodoListUI = (props) => {
  return (
    <div style={{margin: "10px 0 0 10px"}}>
      <Input 
        placeholder="please input" 
        value={props.inputValue} 
        style={{width: "300px", marginRight: "10px"}}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      <List
        style={{marginTop: "10px", width: "300px"}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={(index) => {props.handleItemDelete(index)}}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}
export default TodoListUI
