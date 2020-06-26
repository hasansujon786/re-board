import React from 'react'

export const TodoContext = React.createContext(null)
function todoReducer(state, action) {
  switch (action.type) {
    case 'updateName':
      return {name: action.name}
    case 'hello':
      console.log(action.payload)
      return state
    default:
      return state
  }
}


const TodoProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(todoReducer, {name: 'hasan'})

  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider

