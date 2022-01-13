import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../Shared/Header/Header';
import SingleFeed from '../SingleFeed/SingleFeed';

const Feed = () => {
    const [feed, setFeed] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/prings')
        .then(res => res.json())
        .then(data => setFeed(data));
    }, [])
    return (
        <div>
            <Header />
            <h2 className="mt-5 pt-2 text-center">Checkout What your Neighbors Pring!</h2>
            <p className="mb-5 pb-2 text-center"><Link style={{textDecoration: 'none'}} to='/pringo'><small>No, I wanna Pring!</small></Link></p>
            {
                feed[0]?._id &&
                <div className="container d-flex flex-wrap justify-content-center">
                    <div style={{minWidth: '0', maxWidth: '700px'}} className="mx-4">
                        {
                            feed.map(singleFeed => {
                                return <SingleFeed key={singleFeed._id} singleFeed={singleFeed} />
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Feed;