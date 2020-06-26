import React, {useContext} from 'react'

import List from '../components/List'
import BoardInput from '../components/BoardInput'
import {BoardContext} from '../provider/BoardProvider'
import {isObjectEmpty} from '../utils'

function BoardId({boardId}) {
  const [{boards}, dispatch] = useContext(BoardContext)
  const board = boards[boardId]

  const createNewList = name => dispatch({type: 'CREATE_NEW_LIST', payload: {name, boardId}})
  const deleteAList = listId => dispatch({type: 'DELETE_A_LIST', payload: {listId, boardId}})

  const createNewCard = value => dispatch({type: 'CREATE_NEW_CARD', payload: {...value, boardId}})
  const deleteACard = value => dispatch({type: 'DELETE_A_CARD', payload: {...value, boardId}})

  return (
    <section
      className='pl-2 py-4 flex overflow-x-auto'
      style={{height: 'calc(100vh - 64px)'}}>
      {
        !isObjectEmpty(board.lists) &&
        Object.keys(board.lists).map(key => <List list={board.lists[key]} deleteAList={deleteAList} deleteACard={deleteACard} createNewCard={createNewCard} listId={key} key={key} />)
      }
      <div
        style={{minWidth: '300px'}}
        className='pr-2 self-start'
      >
        <BoardInput className='bg-gray-300'
          onSubmit={title => createNewList(title)}
          btnText='Add another list' placeholder='Enter list title'
        />
      </div>

    </section>
  )
}

export default BoardId



