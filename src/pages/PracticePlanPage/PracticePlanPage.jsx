import { useState } from 'react';
import * as practicePlanAPI from '../../utilities/practiceplan-api';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

export default function PracticePlanPage() {
  const [practice, setPractice] = useState({
    date: "",
    equipment: "",
    startTime: "",
    endTime: "",
    drill: "",
    announcement: ""
  });

  const history = useHistory();
  
  function handleChange(evt){
    setPractice({...practice, [evt.target.name]: evt.target.value });
  }
  async function handleSubmit(evt) {
    evt.preventDefault();
    await practicePlanAPI.createPractice(practice)
    history.push('/');
  }
  const theme = createTheme({
    palette: {
        primary: {
          main: '#193344',
        },
        secondary: {
          main: '#FFD371',
        },
      },
});

return (
  <main className="practicePlan">

  <ThemeProvider theme={theme}>
    <CssBaseline />
    
      <Container  item xs={12} sm={8} md={5} component={Paper} elevation={6}>
                  <ListItemButton><Link href='/coach' >
            <ListItemText primary=""/>
            <ListItemIcon>
              <ArrowBackIosIcon href="/coach"/>
            </ListItemIcon></Link>
              
          </ListItemButton>
        <Box
          sx={{
            marginTop: 8,
            marginBottom:8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5" sx={{mt: 3}}>
                Enter Practice Details
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ m: 4 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                  name="date"
                  autoFocus
                  InputLabelProps={{ shrink: true }}
                  required
                  fullWidth
                  label="Date"
                  type="date"
                  value={practice.date}
                  onChange={handleChange}
              />
              </Grid>
              <Grid item xs={6}>
              <TextField
                  margin="normal"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  label="Start Time"
                  name="startTime"
                  type="time"
                  value={practice.startTime}
                  onChange={handleChange}
              />
              </Grid>
              <Grid item xs={6}>
              <TextField
                  margin="normal"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  label="End Time"
                  name="endTime"
                  type="time"
                  value={practice.endTime}
                  onChange={handleChange}
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  margin="normal"
                  fullWidth
                  label="Equipment Needed"
                  name="equipment"
                  type="text"
                  multiline
                  rows={4}
                  value={practice.equipment}
                  onChange={handleChange}
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  margin="normal"
                  fullWidth
                  label="Drills"
                  name="drill"
                  type="text"
                  multiline
                  rows={4}
                  value={practice.drill}
                  onChange={handleChange}
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  margin="normal"
                  fullWidth
                  label="Announcements"
                  name="announcement"
                  multiline
                  rows={4}
                  value={practice.announcement}
                  onChange={handleChange}
              />
              </Grid>
              </Grid>
            <Button 
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Post Practice Plan
            </Button>
          </Box>
        </Box>
      </Container>
  </ThemeProvider>
</main>
  );
}
