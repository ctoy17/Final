import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Link from '@mui/material/Link';
import { ThemeProvider, styled } from '@mui/material/styles';

export default function SideNav({theme}){
    return(
    <ThemeProvider theme={theme}>
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link color="inherit" href="/coach"><ListItemText primary="Coach Dashboard"/></Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FitnessCenterIcon />
      </ListItemIcon>
        <Link color="inherit" href="/create"><ListItemText primary="New Practice"/></Link>  
    </ListItemButton>
  </React.Fragment>
  </ThemeProvider>
    )
}