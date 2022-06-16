import {Link} from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar(props) {
    function handleLogOut() {
        userService.logOut();
        props.setUser(null);
    }

    return (<nav>
        <Link to="/teams">Team Practice Schedule</Link>
        &nbsp; | &nbsp;
        {props.user.role === 'Coach' ? 
        <Link to="/teams/admin">Team Home</Link> :
        <></>}
        &nbsp; | &nbsp;
        <span>Welcome {props.user.role === 'Coach' ? <>Coach</> : <></>} {props.user.name}</span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Logout</Link>
    </nav>);
}