import React from 'react'
import {Link} from '@reach/router'

function Home() {

  return (
    <div className='bg-blue-200'>
      Home | <Link to="boards">Boards</Link>
    </div>
  )
}

export default Home

