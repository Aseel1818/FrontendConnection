import './App.css';
import { useState } from 'react';
import {SignUp,Login} from './Pages/AuthenticationPage';

function App() {
    const [page, setPage] = useState('login');

    return (
        <div className='app'>
            <div className='nav'>
                <button onClick={() => setPage('login')}>Login</button>
                <button onClick={() => setPage('signup')}>Sign up</button>
            </div>
            {page === 'login' ? <Login /> : <SignUp />}
        </div>
    );
}

export default App;
