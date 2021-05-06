import {useState} from 'react';

const Userinputform = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const printValues = e => {
        e.preventDefault();
        console.log(username,password);
    };

    return(
        <>
            <form onSubmit={printValues}>
                <label>Username:</label>
                <input placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)}/>

                <label>Password:</label>
                <input placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}/>

                <button>Submit</button>
            </form>
        </>
    )

}

export default Userinputform;