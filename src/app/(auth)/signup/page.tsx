"use client"

import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // handle form submission logic here
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className=" p-3  gap-3 solid container">

   <h4>
   <label>
                Email:-
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
   </h4>

           <h4>
           <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
           </h4>
           <h4>
           <label>
                Confirm Password:
                <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            </label>
           </h4>
            <button type="submit">Submit</button>


            </div>
        </form>
    );
};

export default Signup;
