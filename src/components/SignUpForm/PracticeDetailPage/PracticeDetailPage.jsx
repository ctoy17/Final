import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';

export default function PracticeDetailPage({ theme, coachPlan, handleDelete }) {
  return (
    <ThemeProvider theme={theme}>

        
        <List sx={{borderTop:'solid', borderColor:'secondary.main'}}>
          <ListItem>
          <ListItemIcon>
            <SportsTennisIcon />
          </ListItemIcon>
            <ListItemText > Date: {coachPlan.date} </ListItemText>
          </ListItem> 
          <ListItem>
            <ListItemIcon>
              <SportsBasketballIcon />
            </ListItemIcon>
              <ListItemText>Start Time: {coachPlan.startTime}</ListItemText>
          </ListItem> 
          <ListItem>
            <ListItemIcon>
              <SportsBaseballIcon />
            </ListItemIcon>
              <ListItemText>End Time: {coachPlan.endTime}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SportsFootballIcon />
            </ListItemIcon>
              <ListItemText>Equipment: {coachPlan.equipment}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SportsSoccerIcon />
            </ListItemIcon>
              <ListItemText>Drills: {coachPlan.drill}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SportsHockeyIcon />
            </ListItemIcon>
              <ListItemText>Announcements: {coachPlan.announcement}</ListItemText>
          </ListItem>
          </List>

    </ThemeProvider>
  );
}
