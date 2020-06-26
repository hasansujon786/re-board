import React from 'react'
import {Link} from '@reach/router'

const NavButton = ({children}) => (
  <Link to='/boards' style={{lineHeight: '40px'}} className='flex items-center pl-2 pr-5 bg-indigo-600 h-10 inline-block text-base font-bold text-white uppercase rounded' >
    {children ?
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
        {children}
      </> :
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid mx-2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        All Boards
      </>

    }
  </Link>
)

export default NavButton
