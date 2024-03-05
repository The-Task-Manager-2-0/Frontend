import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar/Sidebar'

export const MainContainer = () => {
    return (
        <div className='flex h-full'>
            <Sidebar/>
            <div className='flex-0.7'>
                <Outlet />
            </div>
        </div>
    )
}
