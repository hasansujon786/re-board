import React, {useState, useRef, useEffect} from 'react'
import PropTyps from 'prop-types'

const BoardInput = ({onSubmit, className, placeholder, btnText, ...props}) => {
  const inputEl = useRef(null)

  // On toggle
  const [showInput, setShowInput] = useState(false)
  const toggleInput = () => {
    setShowInput(!showInput)
    if (title.trim()) {
      onSubmit(title.trim())
      setTitle('')
    }
  }
  useEffect(() => {
    if (showInput) inputEl.current.focus()
  }, [showInput])

  // On Input change
  const [title, setTitle] = useState('')
  const handleSubmit = (e) => {
    if (e.key === 'Enter') toggleInput()
  }

  return (
    <div className={`text-base text-gray-900 rounded-md ${className}`} {...props} >
      {showInput ?
        <textarea
          onBlur={toggleInput}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={inputEl}
          name='title'
          placeholder={placeholder}
          className='bg-gray-200 p-2 block border border-gray-400 shadow-inner rounded-md text-base text-gray-900 w-full'
          onKeyPress={handleSubmit}
        ></textarea> :
        <button onClick={toggleInput} className='py-3 pl-2 pr-4 flex justify-start items-center w-full bg-gray-300 hover:bg-gray-400 rounded-md' >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus mr-2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          {btnText}
        </button>
      }
    </div>
  )
}
BoardInput.propTypes = {
  onSubmit: PropTyps.func.isRequired,
  className: PropTyps.string,
  placeholder: PropTyps.string,
  btnText: PropTyps.string
}
export default BoardInput
