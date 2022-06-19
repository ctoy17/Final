import {Link} from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar(props) {
    function handleLogOut() {
        userService.logOut();
        props.setUser(null);
    }

    return (<nav>
        <Link to="/create">Add Practice Schedule</Link>
        &nbsp; | &nbsp;
        &nbsp; | &nbsp;
        <span>Welcome Coach {props.user.name}</span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Logout</Link>
    </nav>);
}