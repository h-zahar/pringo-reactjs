import React from 'react';
import './MyPring.css';

const MyPring = (props) => {
    const { _id, title, content } = props.myPring;
    const { myPrings, setMyPrings } = props;

    const handleDelete = (id) => {
        if(!window.confirm('Are you sure to cancel?')) {
            return;
        }
        fetch(`https://api-pringo.herokuapp.com/prings/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'aplplication/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data?.deletedCount === 1) {
                const remaining = myPrings.filter(single => single._id !== id);
                setMyPrings(remaining);
            }
        })
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
    };
    return (
        <div xs={12} sm={6} md={4} lg={3} className="col border d-flex justify-content-center py-3 mx-2 gy-2 shadow-lg">
            <div>
                {/* <h4>{title}</h4> */}
                <p className="my-3 text-secondary">{_id}</p>
                <h3>{title}</h3>
                <p>{content}</p>
                <div className="text-start mt-5 mb-4">
                    <button onClick={() => handleDelete(_id)} className="btn-cross fs-6 px-2 py-0 rounded-circle bg-danger text-light border-0">x</button>
                </div>
            </div>
        </div>
    )
}

export default MyPring;