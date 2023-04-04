import { combineReducers } from 'redux'
import books from './bookReducers'
import users from './userReducers'

export default combineReducers({
  books,
  users,
})
