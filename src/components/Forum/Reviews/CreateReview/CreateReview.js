import './createReview.css';

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as gameService from '../../../../services/gameService';
import * as request from '../../../../services/expressAPI';

import Spinner from '../../../Spinner/Spinner';

const CreateReview = () => {
    const [game, setGame] = useState({});
    const [description, setDescription] = useState('');

    const [rating, setRating] = useState('');
    const [loading, setLoading] = useState(true);

    const { gameId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        gameService.simpleGameById(gameId)
            .then(data => {
                setGame(data);
                setLoading(false);
            });
    }, [gameId]);

    const ratingChangeHandler = (event) => {
        setRating(event.target.value);
    };

    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value);
    }


    const submitReviewHandler = async (e) => {
        e.preventDefault();

        const { description, rating } = Object.fromEntries(new FormData(e.target));

        await request.post('/api/forum/reviews/create', { description, rating, title: game.name, backgroundImage: game.background_image })
            .then((result) => {
                navigate('/forum/reviews');
            })
    }

    return (
        <section className="createReview-section">
            {loading
                ? <Spinner />
                : <>
                    <img className="createReview-background-img" src={game.background_image} alt="background-img" />
                    <div className="createReview-container">
                        <Link className="createReview-return-link" to={-1}>
                            Back
                        </Link>
                        <div>
                            <h1 className="createReview-title">
                                {game.name}
                            </h1>
                            <form className='createReview-form' onSubmit={submitReviewHandler}>
                                <label className="createReview-label" htmlFor="rating">Rate the game:</label>
                                <select className="createReview-select" id="rating" name="rating" value={rating} onChange={ratingChangeHandler}>
                                    <option className="createReview-option" value="5">Best</option>
                                    <option className="createReview-option" value="4">Good</option>
                                    <option className="createReview-option" value="3">Okay</option>
                                    <option className="createReview-option" value="2">Not great</option>
                                    <option className="createReview-option" value="1">Terrible</option>
                                </select>
                                <textarea className="createReview-textarea" name='description' value={description} onChange={descriptionChangeHandler}></textarea>
                                <button className="createReview-button">Submit Review</button>
                            </form>
                        </div>
                    </div>
                </>
            }
        </section>
    );
}

export default CreateReview;