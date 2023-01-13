import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Button = ({text}: {text: String}) => {
  return (
    <button className="self-end flex items-center space-x-1 bg-[#1DC724] px-2 rounded-full">
          <p>{text}</p> <MdKeyboardArrowRight />
        </button>
  )
}

export default Button