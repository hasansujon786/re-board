import React from 'react'
import BoardInput from './BoardInput'


const ListItem = ({card, cardId, listId, deleteACard}) => {
  return (
    <li className='hide-icons mt-2 px-2 py-3 flex items-center justify-between bg-gray-200 border border-gray-400 border-b-2 rounded-md text-base text-gray-900' >
      <span>{card.title}</span>
      <span className=''>
        <button className='icon-btn' onClick={() => deleteACard({cardId, listId})}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
      </span>
    </li>
  )
}

function List({list, listId, deleteAList, createNewCard, deleteACard}) {
  return (
    <div className='bg-gray-300 mx-2 pb-2 rounded-md shadow-lg border border-gray-400 flex flex-col max-h-full self-start'
      style={{minWidth: '300px'}}
    >
      <div style={{minHeight: '40px'}} className='icon-btn-container h-10 px-3 flex items-center justify-between bg-gray-400 border-b border-gray-500 rounded-t-md text-xl font-bold text-gray-700'>
        <span className=''>
          {list.name}
        </span>
        <button className='icon-btn' onClick={() => deleteAList(listId)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2">
            <circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>
      </div>
      <ul className='px-1 overflow-y-auto fancy-scrollbar' >
        {Object.keys(list.cards).map(key =>
          <ListItem card={list.cards[key]} cardId={key} listId={listId} deleteACard={deleteACard} key={key} />)}
      </ul>
      <div className='px-1'>
        <BoardInput placeholder='Enter a title for this card'
          className='mt-2'
          btnText='Add another card'
          onSubmit={title => createNewCard({title, listId})}
        />
      </div>
    </div>
  )
}

export default List



