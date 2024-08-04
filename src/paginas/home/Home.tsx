import React from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Resumo from '../../components/resumo/Resumo';

function Home(){
    return (
        <div className='h-full bg-black flex '>
            <Navbar/>
            <Resumo/>
            
        </div>
    );
}

export default Home;