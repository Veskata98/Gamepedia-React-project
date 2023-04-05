import './home.css';

// import { useContext } from 'react';

// import { NewsContext } from '../../contexts/NewsContext';
import { News } from './News/News';

export const Home = () => {
    // const { news, mainArticle } = useContext(NewsContext);

    const news = [
        {
            title: 'Best Destiny 2 Hunter builds for PvP and PvE',
            date: 'Apr 4, 2023, 4:59 PM',
            description:
                "The best Destiny 2 Hunter builds can turn you from a regular guardian to a golden-gun-toting, lightning-staff-wielding, shadow-bow-firing menace. The Hunter is one of the flashiest - and deadliest - classes you can go in Destiny 2, and here are the best builds you can craft. Our Destiny 2 Hunter build guide takes a deep look at the numerous ways players can develop their characters, culminating in the most powerful builds possible in the free PC game. We've developed the strongest builds based on the tools we have at our disposal this season, perfect if you're going to take on the Iron Banner challenges. It also wouldn't hurt to have a look at the best PvP weapons you can equip right now.",
            image: 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/09/Destiny-Hunter-PvP-Golden-Gun.jpg',
            link: 'https://www.pcgamesn.com/destiny/hunter-builds-best',
        },
        {
            title: 'First Wave Of Xbox Game Pass April 2023 Titles Announced',
            date: 'Apr 4, 2023, 4:57 PM',
            description:
                "The first wave of games for Xbox Game Pass in April has been officially announced, and if you're in the mood for seeing the spookier side of Tokyo, tower defense, and complicated rogue-like action, then there's a lot to look forward to.",
            image: 'https://www.gamespot.com/a/uploads/screen_medium/1601/16018044/4121629-ghostwire.jpg',
            link: 'https://www.gamespot.com/articles/first-wave-of-xbox-game-pass-april-titles-announced/1100-6512945/?ftag=CAD-01-10abi2f',
        },
        {
            title: 'Skyrim Poison Resist Potion Has a Puzzling Side Effect',
            date: 'Apr 4, 2023, 4:55 PM',
            description: 'A Skyrim player manages to create a Poison Resist potion with a humorously anomalous side effect while doing some alchemy.',
            image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/04/skyrim-poison-resist-potion.jpg',
            link: 'https://gamerant.com/skyrim-poison-resist-potion-funny-side-effect/',
        },
        {
            title: 'Samsung 1TB SSD For PS5 Discounted To Lowest Price Yet',
            date: 'Apr 4, 2023, 4:55 PM',
            description:
                "If you're running out of space on your PS5--it's surprisingly easy to fill up the drive--you may want to consider picking up an internal SSD. You can quickly install a compatible SSD and avoid the pesky problem of constantly deleting and redownloading games. Right now, there's a great deal on the stellar Samsung 980 Pro 1TB NVMe SSD at Amazon. You can grab a PS5-ready model with a heatsink already attached for only $90 (lowest price ever). Since the PS5 actually only has 667GB of usable space, you're more than doubling your total storage by installing the 1TB 980 Pro.",
            image: 'https://www.gamespot.com/a/uploads/screen_medium/1595/15950357/4102697-samsung980pro.png',
            link: 'https://www.gamespot.com/articles/samsung-1tb-ssd-for-ps5-discounted-to-lowest-price-yet/1100-6499814/?ftag=CAD-01-10abi2f',
        },
        {
            title: 'Resident Evil Fans Mourn The Loss Of Bolt Cutters In RE4 Remake',
            date: 'Apr 4, 2023, 4:54 PM',
            description: 'Taken too soon.',
            image: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/04/resident-evil-rip-the-boltcutters.jpg',
            link: 'https://www.thegamer.com/resident-evil-fans-mourn-bolt-cutters-re4-remake/',
        },
        {
            title: 'Star Wars Jedi Game Director Reveals Lightsaber Rights Had To Be Fought For',
            date: 'Apr 4, 2023, 4:50 PM',
            description: 'Lucasfilm now trusts Respawn to the extent that the new game advances the story of the overall franchise.',
            image: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/04/untitled-design-2023-04-04t135100-922.jpg',
            link: 'https://www.thegamer.com/star-wars-jedi-lightsaber-rights/',
        },
        {
            title: 'Genshin Impact Player Creates 3D Model For Crimson Witch of Flames Artifact Piece',
            date: 'Apr 4, 2023, 4:49 PM',
            description:
                'One Genshin Impact fan shares an impressive 3D model of the Goblet piece for the popular Crimson Witch of Flames artifact set.',
            image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/04/genshin-impact-xiangling.jpg',
            link: 'https://gamerant.com/genshin-impact-3d-model-crimson-witch-of-flames-artifact-piece/',
        },
        {
            title: 'Elden Ring’s Dark Moon Greatsword Gets Remade in Skyrim',
            date: 'Apr 4, 2023, 4:44 PM',
            description:
                "A gamer brings Elden Ring's iconic Dark Moon Greatsword to the realm of Skyrim, bridging the gap between two beloved gaming universes.",
            image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/03/Elden-Ring-Dark-Moon-Greatsword-Cropped.jpg',
            link: 'https://gamerant.com/elden-ring-dark-moon-greatsword-remade-skyrim/',
        },
    ];

    const mainArticle = {
        title: 'Elden Ring’s Dark Moon Greatsword Gets Remade in Skyrim',
        date: 'Apr 4, 2023, 4:44 PM',
        description:
            "A gamer brings Elden Ring's iconic Dark Moon Greatsword to the realm of Skyrim, bridging the gap between two beloved gaming universes.",
        image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/03/Elden-Ring-Dark-Moon-Greatsword-Cropped.jpg',
        link: 'https://gamerant.com/elden-ring-dark-moon-greatsword-remade-skyrim/',
    };

    return (
        <section className="home-section">
            <h1 className="home-heading">Gamepedia - The Gaming Encyclopedia</h1>
            <div className="home-divider">
                <div className="home-news-container">
                    <h2 className="home-subheading">Gaming News</h2>

                    <article className="home-mainNews-article">
                        <img src={mainArticle.image} alt="news_img" className="home-mainNews-article-img" />
                        <div className="home-mainNews-article-text">
                            <h3 className="home-mainNews-article-title">{mainArticle.title}</h3>
                            <p className="home-mainNews-article-date">{mainArticle.date}</p>
                            <p className="home-mainNews-article-desc">{mainArticle.description}</p>
                            <a href={mainArticle.link} className="home-mainNews-article-link" target="_blank" rel="noreferrer">
                                Read More
                            </a>
                        </div>
                    </article>

                    {news.map((x) => (
                        <News key={x.title} news={x} />
                    ))}
                </div>
                <div className="last-discussions">
                    <h2 className="home-subheading">Latest Discussions</h2>
                    <ul className="last-discussion-list">
                        <li className="last-discussion-item">
                            <a href="/forum/discussions/{{_id}}">
                                <p className="last-discussion-title">title</p>
                                <p className="last-discussion-date">date</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
