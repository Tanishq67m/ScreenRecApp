'use client'
import React from 'react'
import Image from 'next/image'

const DropdownList = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure className="">
            <Image src="/assets/icons/hamburger.svg" alt="menu" width={14} height={14} />
            <span>Most recent</span>
          </figure>
          <Image src="/assets/icons/arrow-down.svg" alt="down-arrow" width={20} height={20} />
        </div>
      </div>

      {isOpen && (
        <ul className='dropdown'>
            {['Most recent', 'Most viewed', 'Most liked', 'Most commented'].map((option)=>(
                <li key={option} className='list-item'>
                    {option}
                </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownList
