import React from 'react'

export default function HomeNavigation() {
  return (
    <div className='flex flex-col w-full p-2'>
      {/* Search Bar and Assign Task button */}
      <div className='flex justify-between'>
        {/* to arrange search icon inside input */}
        <div className='flex items-center relative w-1/2 p-1'>
          <input type='text' className=' flex  items-start rounded-lg shadow-lg shadow-gray-400 p-1 w-full' placeholder='Enter task keywords or employee names' ></input>
          <SearchIcon className='absolute right-2 ' />
        </div>
      </div>
      {/* icons */}
      <div>
        
      </div>
    </div>
  )
}
