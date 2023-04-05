import { Link } from 'react-router-dom';

export const PlatformTemplate = ({ platform }) => {
    return (
        <div className="platform-card">
            <Link to={`/platforms/${platform.id}`}>
                <img src={platform.image} loading="lazy" alt="platform-img" className="platform-img" />
                <span className="platform-title">{platform.name}</span>
            </Link>
        </div>
    );
};
