import React from 'react';

const SingleFeed = (props) => {
    const { _id, title, content } = props.singleFeed;
    return (
        <div className="mb-5">
            {
                _id &&
                <div className="shadow-lg rounded">
                    {
                        title ?
                        <h4 className="pt-5 text-center">{title}</h4> :
                        <h4 className="pt-5 text-center">No Heading</h4>
                    }
                    <p className="mx-5 pt-5 mb-1 pb-2 text-secondary"><small>Pringo ID #{_id}</small></p>
                    <p style={{overflowX: 'scroll'}} className="mx-5 pb-5">{content}</p>
                </div>
            }
        </div>
    )
}

export default SingleFeed;