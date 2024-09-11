import React, { FormEvent, useState } from 'react'
import { IRegistration } from './interface/IRegistration'

export default function Registration(){
    const [data, setData] = useState<IRegistration>({email: "", password: "", confirmpassword: ""});

    const handleSubmit = (e :FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(data);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setData({...data,[event.target.name]: event.target.value})
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>


                <input type="text" name='email' onChange={handleChange} placeholder='Enter your email.' />
                <input type="password" name='password' onChange={handleChange} placeholder='Enter your Password' />
                <input type="password" name='confirmpassword' onChange={handleChange} placeholder='Enter your Password again' />

                <input type="submit" value="save" />


            </form>
        </div>
    )
}

