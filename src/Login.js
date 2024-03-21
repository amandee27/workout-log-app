import { useState , useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
//useNavigate option not available in react router dom 5

const Login = ({ onLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
   // const { state } = useLocation();
   // const { updateData } = state || {}; //from app.js
   // const [newData, setNewData] = useState(false);
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

   

    const onButttonClick = (e) => {
        console.log("Login clicked");
        console.log(e);
        setEmailError('');
        setPasswordError('');

        if ('' === email) {
            setEmailError('Please enter your email')
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError('Please enter a valid email')
            return
        }

        if ('' === password) {
            setPasswordError('Please enter a password')
            return
        }

        if (password.length < 7) {
            setPasswordError('The password must be 8 characters or longer')
            return
        }

        login();
    }

    const login = () => {
        console.log("triggerring")
        event.preventDefault();
        fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        }).then((res) => {
            if (!res.ok) {
                console.log(res);
                throw Error('could not fetch data for that resource');
            }
            return res.json();
        }).then((data) => {
            console.log(data);
            localStorage.setItem('login', JSON.stringify(true));
            localStorage.setItem('token', JSON.stringify(data.accessToken));
            setLoggedIn(true);
            onLogin();
            navigate("/");
        })
    }

    return (
        <div className="mainContainer">
            <div className="titleContainer">
                <div>Login</div>
            </div>
            <br />
            <div className="inputContainer">
                <input type="text"
                    value={email}
                    placeholder="Enter your email here"
                    onChange={(e) => setEmail(e.target.value)}
                    className={'inputBox'} />
                <label className="errorLabel">{emailError}</label>
            </div>
            <br />
            <div className="inputContainer">
                <input type="password"
                    placeholder="Enter your password here"
                    onChange={(e) => setPassword(e.target.value)}
                    className={'inputBox'} />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className="inputContainer">
                <input
                    type="button"
                    className={'inputButton'}
                    onClick={onButttonClick}
                    value={'Log in'} />
            </div>
            <div>
                Do not have an account? <Link to="/sign-up"> Click here to SignUp</Link>
            </div>

        </div>
    );
}

export default Login;