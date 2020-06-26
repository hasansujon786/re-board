import React, {useContext} from 'react';
import {Link} from '@reach/router';
import BoardInput from '../components/BoardInput';
import {BoardContext} from '../provider/BoardProvider';

const ProjectItem = ({to, children}) => (
  <Link to={to} className='p-4 h-32 bg-gray-200 border border-gray-400 border-b-2 rounded-md text-base text-gray-900'>
    <h3 className='text-2xl capitalize'>{children}</h3>
  </Link>
)

export default function Boards() {
  const [{boards}, dispatch] = useContext(BoardContext)
  const createNewList = title => dispatch({type: 'CREATE_NEW_BOARD', payload: title})

  return (
    <section className='boards-container max-w-4xl mx-auto pt-5 pb-20'>
      {Object.keys(boards).map(key =>
        <ProjectItem key={key} to={`b/${key}/${boards[key].name}`}>
          {boards[key].name}
        </ProjectItem>
      )}

      <div>
        <BoardInput onSubmit={createNewList} btnText='Create new project' style={{maxWidth: '300px'}} />
      </div>

    </section>
  )
}
