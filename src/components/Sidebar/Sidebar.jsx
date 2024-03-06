import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../../global/style'
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { IconButton } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ShareIcon from '@mui/icons-material/Share';

export const Sidebar = () => {
  return (
    <div style={{backgroundColor:colors.col3}} className='flex h-full flex-0.3 p-10 ' >
        <div className='flex flex-col'>
            <Link to="home"><IconButton><PersonOffIcon/></IconButton></Link>   
            <Link to="ticket"><IconButton><ShareIcon/></IconButton></Link> 
            <Link to="ticket"><IconButton><AssignmentIcon/></IconButton></Link>            
        </div>
    </div>
  )
}
