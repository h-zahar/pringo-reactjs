import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import './MakeAPring.css'

const MakeAPring = () => {
    const { user } = useAuth();
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        data.isApproved = true;
        data.email = user.email;
        data.pins = 0;
        data.gossips = 0;
        fetch('http://localhost:5000/prings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data?.acknowledged) {
                reset();
            }
        })
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
        console.log(data);
    };
    return (
        <div>
            <Header />

            <div style={{minHeight: '45vh'}} className="my-4 py-3 d-flex justify-content-center">
                <form style={{maxWidth: '550px', minWidth: '380px'}} className="d-flex flex-column custom-form p-5 shadow-lg rounded" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text-center mb-3">Create Pring</h4>
                    <input className="my-2" placeholder="Title (Optional)" {...register("title", { required: false })} />
                    {errors.title && <span className="mb-2 text-danger">Something's not correct</span>}

                    <textarea rows={5} className="my-2" placeholder="Content (Max 700 Characters)" {...register("content", { required: true, maxLength: 700 })} />
                    {errors.short_description && <span className="mb-2 text-danger">Something's not correct</span>}

                    <button type="submit" value="Submit" className='btn btn-custom my-2 py-2'>Pringo!</button>
                   
                </form> 
            </div>
        </div>
    )
}

export default MakeAPring;