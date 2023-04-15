const MyReviewCard = ({ review }) => {
    return (
        <div className='myReviews-card'>
            <img className='myReviews-img' src={review.backgroundImage} alt={review.title} />
            <p className='myReviews-title'>
                {review.title}
            </p>
            <p className='myReviews-overview'>
                {review.description}
            </p>
            <p className='myReviews-date'>
                {new Date(review.date).toLocaleString()}
            </p>
            <p className='myReviews-rating'>
                {review.rating}
            </p>
        </div>
    );
};

export default MyReviewCard;