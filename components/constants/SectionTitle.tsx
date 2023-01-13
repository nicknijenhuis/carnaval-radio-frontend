import React from 'react'

const SectionTitle = ({title} : {title: String}) => {
  return (
    <div className="flex space-x-4 items-center">
          <div className="h-5 w-5 bg-[#FFA500]"></div>
          <h2 className="text-2xl">{title}</h2>
        </div>
  )
}

export default SectionTitle