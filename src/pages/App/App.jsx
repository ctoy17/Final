import './App.css';
import {useState} from "react";
import TeamAdminPage from "../TeamAdminPage/TeamAdminPage";
import AuthPage from "../AuthPage/AuthPage";
import {Route, Switch, Redirect} from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import TeamSchedulePage from "../TeamSchedule/TeamSchedulePage";
import NavBar from "../../components/NavBar/NavBar";
import ViewTeamsPage from "../ViewTeams/ViewTeamsPage"
import PlayerProfilePage from '../PlayerProfilePage/PlayerProfilePage';

export default function App() {
    const [user, setUser] = useState(getUser());
    return (<main className="App">
            {user ? <>
                <NavBar user={user} setUser={setUser}/>
                <Switch>
                    <Route path="/teams/admin">
                        <TeamAdminPage user={user} setUser={setUser}/>
                    </Route>
                    <Route path="/teams/view">
                        <ViewTeamsPage user={user} setUser={setUser}/>
                    </Route>
                    <Route path="/teams">
                        <TeamSchedulePage user={user} setUser={setUser}/>
                    </Route>
                    <Route path="/playerprofile">
                        <PlayerProfilePage user={user} setUser={setUser}/>
                    </Route>
                    {user.role === 'Coach' ? 
                        <Redirect to="/teams/admin"/>
                        :   
                        <Redirect to="/playerprofile"/>
                    }
                    
                </Switch>
            </> : <AuthPage setUser={setUser}/>}
        </main>);
}