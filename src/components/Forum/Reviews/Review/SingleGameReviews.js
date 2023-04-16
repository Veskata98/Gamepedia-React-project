const SingleGameReviews = ({ singleGameReviews }) => {
    return (
        <div className="review-one-card">
            <div className='review-one-firstline'>
                <p className='review-one-user'>Reviewed by: <b>{singleGameReviews.creatorId.username}</b></p>
                <p>Rating: {singleGameReviews.rating}</p>
            </div>
            <div className="review-one-overview-container">
                <p className='review-one-overview'>{singleGameReviews.description}</p>
            </div>
            <p className='review-one-date'>{new Date(singleGameReviews.date).toLocaleString()}</p>
        </div>
    );
};

export default SingleGameReviews;