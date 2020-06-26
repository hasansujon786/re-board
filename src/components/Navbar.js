import React from 'react'
// import {Link} from '@reach/router'

function Navbar({children}) {

  return (
    <div className='px-3 h-16 sticky top-0 flex justify-between items-center bg-blue-200 '>
      {children}
      <h1 className='text-3xl font-bold text-white text-gray-900'>ReBoard</h1>
      <div>
        dfd
      </div>
    </div>
  )
}

export default Navbar


