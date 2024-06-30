"use client"
import { Menu } from '@mui/icons-material'
import { AppBar, Icon, IconButton, MenuList, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Header({toggleDrawer} : {toggleDrawer: () => void}){
  return <AppBar 
    style={{backgroundColor: '#092b55'}}
    position='absolute'
>
    <Toolbar>
        <IconButton onClick={toggleDrawer} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Menu/>
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
            D E S T I N A T I O N S
        </Typography>
    </Toolbar>
</AppBar>
}

export default Header