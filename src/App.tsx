import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from "react-router-dom";
import Link from '@mui/material/Link';
import './App.scss'


const pages = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Comedians',
    path: '/comedians'
  },
  // {
  //   name: 'Profile',
  //   path: '/profile'
  // },
  // {
  //   name: 'Forum',
  //   path: '/forrm'
  // }
]


function App() {
  console.log('render App')
  return (
    <div className="App">
      <AppBar className='app-bar' position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link className='link' href={page.path} underline="none">
                {page.name}
              </Link>            
            ))}
          </Box>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>        
      </AppBar>
      <Outlet />
    </div>
  );
}

export default App;
