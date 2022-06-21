import { ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography';

export default function Profile({theme, user}) {
    return (
    <ThemeProvider theme={theme}>
        <Avatar
            alt="Coach"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 70, height: 70, border: 1, borderColor: 'primary.main', boxShadow: 4,  backgroundColor: 'secondary.main' }}
            
        />
        <Typography sx={{ component:"h1", variant:"h2", paddingTop: 3 }}>Coach {user.name} </Typography>
    </ThemeProvider>
    );
}