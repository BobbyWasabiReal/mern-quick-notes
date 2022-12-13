import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <main>
            <h1>AuthPage</h1>
            <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
            {showLogin ? <LogInForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        </main>
    );
}