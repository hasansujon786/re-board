import React, {useContext} from 'react';
import {Link} from '@reach/router';
import BoardInput from '../components/BoardInput';
import {BoardContext} from '../provider/BoardProvider';


export default function Boards() {
  const [{boards}, dispatch] = useContext(BoardContext)
  const createNewList = title => dispatch({type: 'CREATE_NEW_BOARD', payload: title})

  return (
    <section>
      {
        Object.keys(boards).map(key => <Link key={key} to={`b/${key}/${boards[key].name}`}>{boards[key].name + ' | '}</Link>)
      }

      <div>
        <BoardInput onSubmit={createNewList} btnText='Create new project' style={{maxWidth: '300px'}} />
      </div>

    </section>
  )
}
