import React from 'react';
import './styles.scss';

const HeadForm =({ title, children }) => {
    return (
        <div className='authBinding'>
            <div className='wrap'>
                {title && <h2>
                    {title}
                </h2>}
                <div className='children'>
                {children && children }
                </div>
            </div>
        </div>
    );
}
export default HeadForm;