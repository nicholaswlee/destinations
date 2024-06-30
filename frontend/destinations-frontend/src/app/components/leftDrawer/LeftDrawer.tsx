import React from 'react'
import PropTypes from 'prop-types'
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Hiking, Inbox, Logout, Mail, Newspaper, WorkspacePremium } from '@mui/icons-material'
import { useAuthentication } from '@/app/contexts/AuthenticationContext'

function LeftDrawer({isDrawerOpen, setIsDrawerOpen} : {isDrawerOpen: boolean, setIsDrawerOpen: (value: boolean) => void}){
  const {handleLogout} = useAuthentication()
    return <Drawer
                anchor={"left"}
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setIsDrawerOpen(false)}
                    onKeyDown={() => setIsDrawerOpen(false)}
                    >
                    <List>
                        <ListItem key={"Feed"} disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <Newspaper/>
                            </ListItemIcon>
                            <ListItemText primary={"Feed"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={"Top Destinations"} disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <WorkspacePremium/>
                            </ListItemIcon>
                            <ListItemText primary={"Top Destinations"} />
                            </ListItemButton>
                        </ListItem>
                        
                        <ListItem key={"Your Destinations"} disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <Hiking/>
                            </ListItemIcon>
                            <ListItemText primary={"Your Destinations"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={"Logout"} disablePadding>
                            <ListItemButton onClick={() => handleLogout()}>
                            <ListItemIcon>
                               <Logout/>
                            </ListItemIcon>
                            <ListItemText primary={"Logout"} />
                            </ListItemButton>
                        </ListItem>
                    </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
</Drawer>
}
export default LeftDrawer
