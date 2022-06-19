import SignUpForm from '../../components/SignUpForm/SignUpForm2';
import LoginForm from '../../components/LoginForm/LoginForm2';
import {useState} from "react";

export default function AuthPage({setUser}) {
    const [showLogin, setShowLogin] = useState(true);

    return (        
        <main>
            {showLogin ? <LoginForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin}/> : <SignUpForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin}/>}
        </main>
    );
}