import React from 'react'
import Navbar from '../components/Navbar'
// import {Link} from '@reach/router'
import NavButton from '../components/NavButton'


const BoardLayout = ({children}) => {
  return (
    <main
      className='h-screen bg-green-300 flex flex-col'
    >
      <Navbar >
        <NavButton></NavButton>
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
