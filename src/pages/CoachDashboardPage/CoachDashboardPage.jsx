import { useState, useEffect } from "react";
import PracticeCard from "../../components/PracticeCard/PracticeCard";
import * as practicePlanAPI from '../../utilities/practiceplan-api'
import { ThemeProvider, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutIcon from '@mui/icons-material/Logout';
import SideNav from '../../components/SideNav/SideNav';
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import * as userService from '../../utilities/users-service';
import Profile from "../../components/Profile/Profile";

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          TEAMSPlan
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const drawerWidth = 240;
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );
  
  
  export default function CoachDashboardPage({theme, user, setUser }) {
    const [coachPlan, setCoachPlan] = useState([]);
    useEffect(function(){
        async function getPractice(){
            const practices = await practicePlanAPI.getCoachPractices();
            setCoachPlan(practices);
            console.log(practices)
        }getPractice();
    }, []);

    const handleDelete = async (id) => {
        const practices = await practicePlanAPI.removePracticePlan(id);
        setCoachPlan(practices);
        console.log(practices)
    };
    const handleUpdate = async(id) =>{
        const practices = await practicePlanAPI.updatePlan(id);
        setCoachPlan(practices);
    }

    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                        COACH DASHBOARD
                        </Typography>
                        <Link color="inherit" href="" onClick={handleLogOut}>
                            <LogoutIcon/> 
                        </Link>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        px: [1],
                        bgcolor:"secondary.main"                    
                    }}
                    >
                    <Typography component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1,  }}>Welcome</Typography>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav" > 
                        <SideNav/>
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme)=>
                        theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container  sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3} sx={{mb:3}}>
                            <Grid item xs={12} md={8} lg={9} >
                                <Paper sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap:'wrap'}} >
                                        {coachPlan.length ? coachPlan.map((coachPlan)=>(
                                            <PracticeCard coachPlan={coachPlan} key={coachPlan._id} handleDelete={handleDelete} handleUpdate={handleUpdate} theme={theme}/>
                                            )) : <h3> No Practices Have Been Added! </h3>}
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3} >
                                <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    
                                }}
                                >
                                    <Profile theme={theme} user={user}/>
                                </Paper>
                            </Grid>
                        </Grid>
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <FitnessCenterIcon sx={{color: 'primary.main'}}/>
                                        </ListItemIcon>
                                            <Link color="inherit" href="/create">
                                                <ListItemText primary="Add a Practice Plan"/>
                                            </Link>  
                                    </ListItemButton>
                                </Paper>
                            </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
}