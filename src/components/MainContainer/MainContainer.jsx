import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar/Sidebar'

export const MainContainer = () => {
    return (
        <div className='flex w-screen h-screen'>
            <div className=' w-1/12'>
                <Sidebar/>
            </div>
            <div className='flex w-11/12  h-full'>
                <Outlet />
            </div>
        </div>
    )
}
