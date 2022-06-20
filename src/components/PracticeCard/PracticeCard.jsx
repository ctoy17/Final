import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import PracticeDetailPage from '../SignUpForm/PracticeDetailPage/PracticeDetailPage';

export default function PracticeCard({ theme, coachPlan, handleDelete, handleUpdate }){
    

    
    return(
        <ThemeProvider theme={theme}>
      <CssBaseline />
        <Container sx={{ py: 2 }} >
          {/* End hero unit */}
          <Grid container spacing={1}>
              <Grid item   >
                <Card item 
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: 'solid', borderColor: 'primary.main' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '56.25%',
                      backgroundImage: 'url(https://i.imgur.com/WpXjy43.png)',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: (t) =>
                      t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                      backgroundPosition: 'center',
                    }}

                  />
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {coachPlan.date}
                    </Typography>
                    <PracticeDetailPage theme={theme} coachPlan={coachPlan} handleDelete={handleDelete}/>
                  </CardContent>
                  <CardActions sx={{justifyContent: 'center'}}>
                    
                    {/* <Button size="small" onClick={(evt)=>handleUpdate(coachPlan._id)}>Edit</Button> */}
                    <Button size="small" sx={{justifyContent: 'center', color: 'red'}} onClick={(evt)=>handleDelete(coachPlan._id)} >Delete</Button>
                  </CardActions>
                </Card>
              </Grid>
           </Grid>   
        </Container>
        </ThemeProvider>
    )
};
