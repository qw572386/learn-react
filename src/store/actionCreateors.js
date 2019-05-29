import { CHANGE_INPUTVALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST } from './actionTypes'
import axios from 'axios'
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUTVALUE,
  value
})
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})
export const initListAction = (data) => ({
  type: INIT_TODO_LIST,
  data
})
export const getTodoList = () =>{
  return (dispatch) => {
    axios.get('/list.json').then(res => {
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);
    })
  }
}