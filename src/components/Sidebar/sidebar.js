import React from 'react';
import {Box, Icon, Typography} from '@mui/material';
import './sidebar.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Sidebar = () => {
    return(
        <Box className='sidebarMainDiv'>
            <Box className='logoMainDiv'>
                <img src="assets/Images/spotifyLogo.png" alt="logo"/>
            </Box>
            <Box>
                <ListItem>
                    <ListItemIcon>
                        <HomeIcon style={{color: '#b3b3b3'}}/>
                    </ListItemIcon>
                    <ListItemText 
                        primary="Home" 
                        primaryTypographyProps={{color: '#b3b3b3'}}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SearchIcon style={{color: '#b3b3b3'}}/>
                    </ListItemIcon>
                    <ListItemText 
                        primary="Search" 
                        primaryTypographyProps={{color: '#b3b3b3'}}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <LibraryMusicIcon style={{color: '#b3b3b3'}}/>
                    </ListItemIcon>
                    <ListItemText 
                        primary="Your Library" 
                        primaryTypographyProps={{color: '#b3b3b3'}}
                    />
                </ListItem>
                <ListItem style={{marginTop: "15px"}}>
                    <ListItemIcon>
                        <AddBoxIcon style={{color: '#b3b3b3'}}/>
                    </ListItemIcon>
                    <ListItemText 
                        primary="Your Library" 
                        primaryTypographyProps={{color: '#b3b3b3'}}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FavoriteIcon style={{color: '#b3b3b3'}}/>
                    </ListItemIcon>
                    <ListItemText 
                        primary="Your Library" 
                        primaryTypographyProps={{color: '#b3b3b3'}}
                    />
                </ListItem>
            </Box>
        </Box>
    )
}

export default Sidebar;