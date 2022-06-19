import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  
  const theme = createTheme();
  
  export default class SignUpForm extends Component {
    
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    }


    handleSubmit = async (evt) => {
        evt.preventDefault();
        // alert(JSON.stringify(this.state));
        try{
            const formData = {...this.state};
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            this.props.setUser(user);
            
            console.log(user);
        } catch {
            this.setState({ error: 'Sign Up Failed - Try Again' });
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
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
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" onSubmit={this.handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                <TextField
                                    name="name"
                                    required
                                    fullWidth
                                    value={this.state.name}
                                    label="Name"
                                    autoFocus
                                    onChange={this.handleChange}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Email Address"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Enter Password"
                                        name="password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="confirm"
                                        label="Confirm Password"
                                        type="password"
                                        value={this.state.confirm}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button 
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={disable}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Button onClick={(evt) => this.props.setShowLogin(!this.showLogin)}>
                                        {'Already have an account?'} <br/> {'Log In'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
        );
    }
}
