import {Link} from "react-router-dom";
import * as userService from '../../utilities/users-service';
import { ThemeProvider } from '@mui/material/styles';

export default function NavBar(props) {
    function handleLogOut() {
        userService.logOut();
        props.setUser(null);
    }

    return (
    <ThemeProvider theme={props.theme}>
        <span>Welcome Coach {props.user.name}</span>
        &nbsp; | &nbsp;
        <Link to="/create">Add Practice Schedule</Link>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Logout</Link>
    </ThemeProvider>
    );
}