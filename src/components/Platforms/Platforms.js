import './platform.css';

import { useEffect, useState } from 'react';
import * as request from '../../services/requester';

const Platforms = () => {
    const [imagePaths, setImagePaths] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/platforms/images')
            .then((response) => response.json())
            .then((data) => {
                setImagePaths(data.imageUrls);
                console.log(data.imageUrls);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <section class="plaftorms-section">
            <div class="platforms-titles">
                <h1 class="platforms-heading-main">Gaming Platforms</h1>
                <h1 class="platforms-heading-news">Console News</h1>
            </div>
            <div class="platforms-wrapper">
                <div class="platforms-container">
                    {imagePaths.map((x) => {
                        return (
                            <div class="platform-card">
                                <h2 class="platform-title">
                                    <a href="/platforms/{{id}}">{x.name}</a>
                                </h2>
                                <a href="/platforms/{{id}}">
                                    <img src={x} loading="lazy" alt="platform-img" class="platform-img" />
                                </a>
                            </div>
                        );
                    })}
                </div>
                <div class="platforms-news">
                    <ul class="platforms-news-list" role="list">
                        <li class="platforms-news-item">
                            <a href="{{url}}" target="_blank">
                                title
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Platforms;
