import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../../global/style'

export const Sidebar = () => {
  return (
    <div style={{backgroundColor:colors.col3}} className='flex flex-0.3 p-10 h-full' >
        <div>
            <Link to="home">Click</Link>            
        </div>
    </div>
  )
}
