import React from 'react'
import { colors } from '../../global/style'
import { Nav } from './Nav'

export const Home = () => {
  return (
    <div className='flex p-10 h-full flex-col w-full'>
      <Nav />
      <div className='w-full'>
        {/* good morning */}
        <div className='w-full p-5'>
          <div className=' font-bold'>Good Morning Ananya</div>
          <div className=' text-sm' style={{ color: colors.col3 }}>Check your progress and tasks</div>
        </div>

        {/* review */}
        <div className='flex flex-wrap justify-between w-full p-5'>

          <div className='flex justify-around w-1/2 items-center'>
            <div className='h-fit rounded-lg shadow-lg shadow-gray-400 p-4'>
              <div className='font-bold text-sm'>Review</div>
              <div className=' text-sm' style={{ color: colors.col3 }}>Week 12 overview</div>
            </div>
            <div className='h-fit rounded-lg shadow-lg shadow-gray-400 p-4'>
              <div className='font-bold'>Plan for next sprint</div>
              <div className=' text-sm' style={{ color: colors.col3 }}>Week 12 task overview</div>
            </div>
          </div>

          <div className='flex flex-wrap justify-between w-1/2'>
            <div className='flex flex-col h-fit rounded-lg shadow-lg shadow-gray-400 p-6 w-1/4 justify-between items-center' style={{ backgroundColor: colors.col4 }}>
              <div className=' rounded-full text-3xl p-3' style={{backgroundColor:colors.col1}}>80%</div>
              <div className=' text-sm' style={{ color: colors.col1 }}>Track your daily progress</div>
            </div>
            <div className='flex flex-col h-fit rounded-lg shadow-lg shadow-gray-400 p-6 w-1/4 justify-between items-center' style={{ backgroundColor: colors.col4 }}>
              <div className=' rounded-full text-3xl p-3' style={{backgroundColor:colors.col1}}>80%</div>
              <div className=' text-sm' style={{ color: colors.col1 }}>Track your daily progress</div>
            </div>
            <div className='flex flex-col h-fit rounded-lg shadow-lg shadow-gray-400 p-6 w-1/4 justify-between items-center' style={{ backgroundColor: colors.col4 }}>
              <div className=' rounded-full text-3xl p-3' style={{backgroundColor:colors.col1}}>80%</div>
              <div className=' text-sm' style={{ color: colors.col1 }}>Track your daily progress</div>
            </div>
          </div>
        </div>

        {/* main task  */}
        <div className='flex w-full'>
          {/* left */}
          <div className='flex flex-col w-1/2 '>

            <div className='flex flex-col p-4'>
              <div>My Task Overview</div>
              <div className='rounded-lg shadow-lg shadow-gray-400 p-6'>
                <div>2 active task</div>
              </div>
            </div>

            <div className='flex flex-col p-3'>
              <div>Total task hours</div>
            </div>
          </div>

          {/* right */}
          <div className='flex flex-col w-1/2 p-3'>

          <div>
            <div>December 2023 tasks</div>
          </div>

          <div>
            <div>Upcoming tasks</div>
          </div>

          </div>
        </div>
        

      </div>
    </div>
  )
}
