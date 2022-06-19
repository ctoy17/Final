import { useState } from 'react';
import * as practicePlanAPI from '../../utilities/practiceplan-api';
import { useHistory, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';


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
  const theme = createTheme();


return (
  <div className='practicePlan'>
    <Link to="/coach">Back To Coach Profile</Link>
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
            <CssBaseline />
                <Box
                    sx={{
                      marginTop: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                >
                  <Typography component="h1" variant="h5">
                        Enter Practice Details
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
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
                        <Grid item xs={12}>
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
                        <Grid item xs={12}>
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
      <form className="createPlan" onSubmit={handleSubmit} >
          <h3>Input Practice Plan</h3>
          <br/>
          <label>Date</label>
              <input type="text" name="date" placeholder="mm/dd/yy" value={practice.date} onChange={handleChange} />
          <label>Start Time</label>
              <input type="text" name="startTime" value={practice.startTime} onChange={handleChange} />
          <label>End Time</label>
              <input type="text" name="endTime" value={practice.endTime} onChange={handleChange} />
          <label>Equipment Needed</label>
              <input type="text" name="equipment" value={practice.equipment} onChange={handleChange}/>
          <label>Drill</label>
              <input type="text" name="drill" value={practice.drill} onChange={handleChange} />
          <label>Announcements</label>
              <input type="text" name="announcement" value={practice.announcement} onChange={handleChange} />
          <button type="submit">Submit</button>
      </form>
  </div>
  );
}
