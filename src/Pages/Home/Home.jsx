import React, { use } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Home = () => {
    const authContext = use(AuthContext);
    console.log(authContext);

    return (
        <div>
            <h1>hello bangladesh</h1>
        </div>
    );
};

export default Home;