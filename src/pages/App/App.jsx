import './App.css';
import {useState} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import CoachDashboardPage from "../CoachDashboardPage/CoachDashboardPage";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from '../../utilities/users-service';
import PracticePlanPage from '../PracticePlanPage/PracticePlanPage';
import { createTheme } from '@mui/material/styles';


export default function App() {
    const [user, setUser] = useState(getUser());
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
    <main className="App">
        {user ? <>
                <Switch>
                    <Route path='/coach' >
                        <CoachDashboardPage user={user} setUser={setUser} theme={theme}/>
                    </Route>
                    <Route path='/create' theme={theme}>
                        <PracticePlanPage/>
                    </Route>
                    <Redirect to='/coach' />
                </Switch>
            </> : <AuthPage setUser={setUser} theme={theme}/>}
        </main>)
}