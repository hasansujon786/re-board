import React from 'react'
import Navbar from '../components/Navbar'
// import {Link} from '@reach/router'
import NavButton from '../components/NavButton'
import {useMatch} from '@reach/router'


const BoardLayout = ({children}) => {
  const match = useMatch("b/:boardId/:boardName")
  const boardName = match && match.boardName ? match.boardName : ''

  return (
    <main
      className='min-h-screen bg-green-300 flex flex-col'
    >
      <Navbar >
        <NavButton>{boardName}</NavButton>
      </Navbar>
      {children}
    </main>
  )

}
export default BoardLayout



// {/* <h1>BoardLayout</h1> */}
// {/*   <nav> */}
// {/*     <Link to="/">Home</Link> |{" "} */}
// {/*     <Link to="b/343434/my-project">Project name</Link> | {" "} */}
// {/*   </nav> */}
// {/*   <hr /> */}
