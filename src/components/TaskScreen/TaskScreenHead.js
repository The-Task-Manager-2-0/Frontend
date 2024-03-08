import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { colors } from '../../global/style';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const TaskScreenHead = () => {

  const [filter, setFilter] = React.useState('');
  const [priority, setPriority] = useState('')
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleGroupChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <div className='flex flex-col w-full p-2'>
      {/* Search Bar and Assign Task button */}
      <div className='flex flex-row justify-between'>
        {/* to arrange search icon inside input */}
        <div className='flex items-center relative w-1/2 p-1'>
          <input type='text' className=' flex  items-start rounded-full shadow-lg shadow-gray-300 p-1 w-full' placeholder='Enter task keywords or employee names' ></input>
          <SearchIcon className='absolute right-2 ' />
        </div>
        <button className=" text-white py-2 px-4 rounded-full font-bold" style={{ background: colors.col4 }}>
          Assign Task
        </button>
      </div>

      <div className='flex flex-row justify-between'>
        {/* Employee Task and filters */}
        <span className='flex font-bold text-black p-1 '>Employee Tasks</span>
        <div>
          {/* filter and priority level */}
          <div className='flex flex-row items-center justify-center'>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, color: colors.col2 }} className=' '>
              <InputLabel id="demo-simple-select-standard-label">Filter By</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={filter}
                onChange={handleChange}
                label="Filter By"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem>Filters</MenuItem> {/*value will depend*/}
                {/* <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
            <div className='flex flex-row items-center justify-center'>
              Group By:
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className=' '>
                  <InputLabel id="demo-simple-select-standard-label">Priority</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={filter}
                    onChange={handleGroupChange}
                    label="Group By"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem></MenuItem> {/*value will depend*/}
                    {/* <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                </FormControl>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
