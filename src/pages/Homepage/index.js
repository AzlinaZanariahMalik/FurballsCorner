import React from 'react';
import Banner from './../../components/Banner';
import Directory from './../../components/Directory';

import './styles.scss';

const Homepage = props => {
    return (
        <div>
        <section className='Timeline'>
            <Banner />
        </section> 
        <section className='Category'>
            <Directory />
        </section> 
            
        </div>
        
        
    );
};

export default Homepage; 