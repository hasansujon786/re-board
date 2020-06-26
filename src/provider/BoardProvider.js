import React from 'react'
import {guidGenerator} from '../utils'
const defaultValue = {
  boards: {
    'b269b302-304d-2390-3741-bf3d0c0cc04d': {
      name: 'my-project',
      lists: {
        'b269b302-304d-2390-3741-bf3d0c0cc04d': {
          name: 'List 1',
          cards: {
            'b269b302-304d-2390-3741-bf3d0c0cc04d': {
              title: 'card 1'
            },
            '3269b302-304d-2390-3741-bf3d0c0cc04d': {
              title: 'card 2'
            },
            '2269b302-304d-2390-3741-bf3d0c0cc04d': {
              title: 'card 3'
            },
          }
        }
      }
    }
  }
}
export const BoardContext = React.createContext({});

const create_new_board = (state, name) => {
  const boardId = guidGenerator()
  let boards = {...state.boards}
  boards[boardId] = {name, lists: {}}
  return {...state, boards}
}


const create_new_list = (state, {boardId, name}) => {
  const listId = guidGenerator()
  const boards = {...state.boards}
  boards[boardId].lists[listId] = {name, cards: {}}

  return {...state, boards}
}
const delete_a_list = (state, {boardId, listId}) => {
  const boards = {...state.boards}
  delete boards[boardId].lists[listId]

  return {...state, boards}
}

const create_new_card = (state, {boardId, listId, title}) => {
  const cardId = guidGenerator()
  const boards = {...state.boards}
  boards[boardId].lists[listId].cards[cardId] = {title}

  return {...state, boards}
}
const delete_a_card = (state, {boardId, listId, cardId}) => {
  const boards = {...state.boards}
  delete boards[boardId].lists[listId].cards[cardId]

  return {...state, boards}
}

function boardReducer(state, {type, payload}) {
  switch (type) {
    case 'CREATE_NEW_BOARD':
      return create_new_board(state, payload)

    case 'CREATE_NEW_LIST':
      return create_new_list(state, payload)
    case 'DELETE_A_LIST':
      return delete_a_list(state, payload)

    case 'CREATE_NEW_CARD':
      return create_new_card(state, payload)
    case 'DELETE_A_CARD':
      return delete_a_card(state, payload)

    default:
      return state
  }
}

const BoardProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(boardReducer, defaultValue)

  return (
    <BoardContext.Provider value={[state, dispatch]}>
      {children}
    </BoardContext.Provider>
  )
}


export default BoardProvider


