import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { TaskScreenHead } from './TaskScreenHead';
// import NavigationIcon from '@mui/material/NavigationIcon';
// import { Fab } from '@mui/material';


export const TaskScreen = () => {
    return (
        <div className='h-full w-full flex flex-col justify-between items-center'>
            {/* Navigation */}
            <TaskScreenHead/>
        <div className='border-t-2 pt-px h-full w-full flex flex-row justify-between items-center bg-white p-4 gap-12'>
            {/* body  */}
            <div className='flex flex-1 flex-col bg-slate-200 rounded-lg p-4 gap-3 shadow-lg shadow-gray-400'>
                {/* Task with high priority */}
                <span className=' flex flex-1 flex-row justify-between '>High Priority <MoreHorizIcon /></span>
                <div className='flex flex-1  bg-slate-50 rounded-lg p-1'>
                    <span className=' flex flex-1 justify-between'>Task < MoreHorizIcon /></span>
                    {/* Task will appear here */}
                </div>
                <button class="bg-white hover:bg-slate-300 shadow-lg shadow-slate-400 text-black py-2 px-4 rounded-full">
                    Create Task
                </button>
            </div>
            <div className='flex flex-1 flex-col bg-slate-200 shadow-lg shadow-gray-400 rounded-lg p-4 gap-3'>
                {/* Ongoing Tasks */}
                <span className=' flex flex-row justify-between gap-4'>Ongoing Task <MoreHorizIcon /></span>
                <div className='flex bg-slate-50 rounded-lg p-1'>
                    <span className=' flex flex-1 justify-between'>Task < MoreHorizIcon /></span>
                    {/* Task will appear here */}
                </div>
                <button class="bg-white hover:bg-slate-300 shadow-lg shadow-slate-400 text-black py-2 px-4 rounded-full">
                    Create Task
                </button>
            </div>
            <div className='flex flex-1 flex-col bg-slate-200 shadow-lg shadow-gray-400 rounded-lg p-4 gap-3'>
                {/* Completed Tasks */}
                <span className=' flex flex-1 flex-row justify-between gap-4'>Task Completed <MoreHorizIcon /></span>
                <div className='flex bg-white rounded-lg p-1'>
                    <span className=' flex flex-1 justify-between'>Task < MoreHorizIcon /></span>
                    {/* Task will appear here */}
                </div>
                <button class="bg-white hover:bg-slate-300 shadow-lg shadow-slate-400 text-black py-2 px-4 rounded-full">
                    Create Task
                </button>
            </div>
            </div>
        </div>
    )
}
