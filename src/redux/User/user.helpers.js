import { auth } from '../../firebase/utility';

export const handlePasswordResetAPI = (email) => {
    const setup ={
        url:'http://localhost:3000/login'
    };
    return new Promise((resolve, reject) => {
        auth.sendPasswordResetEmail(email, setup)
        .then(() => {
            resolve();
            
        })
        .catch (() => { 
            const e = ['Email does not exist from the registered account'];

            reject(e);
            
        });
    });
}; 