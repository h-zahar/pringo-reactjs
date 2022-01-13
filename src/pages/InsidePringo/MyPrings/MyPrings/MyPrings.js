import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Header from '../../../Shared/Header/Header';
import MyPring from '../MyPring/MyPring';

const MyPrings = () => {
    const { user } = useAuth();
    const [myPrings, setMyPrings] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/prings/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyPrings(data))
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
    }, []);
    return (
        <div>
            <Header />
            <div style={{minHeight: '60vh'}}>
                <div className="container mb-5">
                <h3 className="text-center my-4">My Prings</h3><hr />
                <div className="row">
                    {
                        myPrings.map(myPring => {
                            return <MyPring key={myPring._id} myPring={myPring} myPrings={myPrings} setMyPrings={setMyPrings} />
                        })
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default MyPrings;