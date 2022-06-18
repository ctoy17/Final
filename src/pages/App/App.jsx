import './App.css';
import {useState} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import CoachDashboardPage from "../CoachDashboardPage/CoachDashboardPage";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from '../../utilities/users-service';
import NavBar from "../../components/NavBar/NavBar";
import PracticePlanPage from '../PracticePlanPage/PracticePlanPage';


export default function App() {
    const [user, setUser] = useState(getUser());

    return (
    <main className="App">
        {user ? <>
            <NavBar user={user} setUser={setUser}/>
                <Switch>
                    <Route path='/coach' >
                        <CoachDashboardPage user={user} />
                    </Route>
                    <Route path='/create'>
                        <PracticePlanPage/>
                    </Route>
                    <Redirect to='/coach' />
                </Switch>
            </> : <AuthPage setUser={setUser}/>}
        </main>);
}