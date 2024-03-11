import { useState } from "react";

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents the defaults action. In here forms get reload againand get empty the value after submitting
        console.log(e);
    }
    return ( 
        <div>
            <p>Signup</p>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                type="text"
                required
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                 />
                 <label>Email</label>
                 <input
                 type="text"
                 required
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}/>
                 <label>Password</label>
                 <input
                 type="password"
                 required
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}/>
                 <button>SignIn</button>
            </form>
        </div>
     );
}
 
export default SignIn;