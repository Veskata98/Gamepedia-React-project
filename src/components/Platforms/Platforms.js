import './platforms.css';

import { useEffect, useState } from 'react';
import { PlatformTemplate } from './PlatformTemplate';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const Platforms = () => {
    const [platforms, setPlatforms] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(true);

    const techNews = [
        {
            source: {
                id: null,
                name: 'Yahoo Entertainment',
            },
            author: 'Daniel Howley',
            title: "Tim Cook's Apple is coming for Zuckerberg's metaverse - Yahoo Finance",
            description: "Apple's AR/VR headset could be a major blow to Meta's metaverse ambitions.",
            url: 'https://finance.yahoo.com/news/tim-cooks-apple-is-coming-for-zuckerbergs-metaverse-093027794.html',
            urlToImage:
                'https://s.yimg.com/ny/api/res/1.2/y1kszGQ.tZCnIIIu8SrT3Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-08/ece3c4b0-1678-11ed-bedf-8f47aeef314b',
            publishedAt: '2023-04-04T09:30:27Z',
            content:
                'Apples (AAPL) next major product, an AR/VR headset is expected to be unveiled at its WWDC event in June. And that puts the company, and CEO Tim Cook on a direct collision course with market leader Me… [+3540 chars]',
        },
        {
            source: {
                id: 'the-verge',
                name: 'The Verge',
            },
            author: 'Emma Roth',
            title: 'Google Drive quietly introduced (then pulled) a file creation limit for all users - The Verge',
            description:
                'Google has implemented a limit of 5 million files that you can create or upload to Drive even if you pay for extra storage. The policy doesn’t apply to shared files, however.',
            url: 'https://www.theverge.com/2023/4/3/23667971/google-drive-5-million-files-limit-storage',
            urlToImage:
                'https://cdn.vox-cdn.com/thumbor/2pikPu6K3IAQ9yDs5Vsbk9ArsB0=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/23954497/acastro_STK459_01.jpg',
            publishedAt: '2023-04-04T07:15:15Z',
            content:
                'Google Drive quietly introduced (then pulled) a file creation limit for all users\r\nGoogle Drive quietly introduced (then pulled) a file creation limit for all users\r\n / We are rolling back this chang… [+3016 chars]',
        },
        {
            source: {
                id: null,
                name: 'Nintendo Life',
            },
            author: 'Liam Doolan',
            title: 'PSA: 3DS And Wii U eShop Download Codes Can No Longer Be Redeemed - Nintendo Life',
            description: '"Thank you for playing"',
            url: 'https://www.nintendolife.com/news/2023/04/psa-3ds-and-wii-u-eshop-download-codes-can-no-longer-be-redeemed',
            urlToImage: 'https://images.nintendolife.com/d684eaa9aebce/1280x720.jpg',
            publishedAt: '2023-04-04T04:55:00Z',
            content:
                'Image: Nintendo Life\r\nLast week, after ending 3DS and Wii U eShop sales, Nintendo announced it would be extending the period to redeem a code to make up for certain technical difficulties.\r\nThe new d… [+888 chars]',
        },
        {
            source: {
                id: null,
                name: '9to5Mac',
            },
            author: 'Filipe Espósito',
            title: 'Apple patents new AirPods case with interactive display - 9to5Mac',
            description:
                'Apple’s AirPods have gained a bunch of new features since their first generation in 2016. However, they’re still essentially earbuds...',
            url: 'https://9to5mac.com/2023/04/03/apple-patents-airpods-case-display/',
            urlToImage:
                'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/AirPods-case-with-display-concept.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1',
            publishedAt: '2023-04-04T04:07:00Z',
            content:
                'Apple’s AirPods have gained a bunch of new features since their first generation in 2016. However, they’re still essentially earbuds that require an iPhone or other device nearby. But that may change… [+1857 chars]',
        },
        {
            source: {
                id: null,
                name: 'Kotaku',
            },
            author: 'Luke Plunkett',
            title: 'MMO Introduces New Loot Boxes, Pulls Them Immediately After Fans Revolt - Kotaku',
            description: 'Everquest II is almost 20 years old, but it still has lessons to learn',
            url: 'https://kotaku.com/everquest-ii-mmo-loot-box-fan-protest-pay-to-win-pc-1850296876',
            urlToImage:
                'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0b875bc304c7ab2f4bf9c047d22b736d.jpg',
            publishedAt: '2023-04-04T01:50:00Z',
            content:
                'Late last month the developers of venerable MMO Everquest II introduced a new kind of loot box to the game that was, basically, a pay-to-win situation. It did not go down well with the long-running c… [+2038 chars]',
        },
        {
            source: {
                id: null,
                name: 'Nintendo Life',
            },
            author: 'Liam Doolan',
            title: 'Nintendo Expands Its Switch Online N64 Library With Another Game Next Week - Nintendo Life',
            description: 'Pokémon Stadium returns',
            url: 'https://www.nintendolife.com/news/2023/04/nintendo-expands-its-switch-online-n64-library-with-another-game-next-week',
            urlToImage: 'https://images.nintendolife.com/7833a4af476da/1280x720.jpg',
            publishedAt: '2023-04-04T01:05:00Z',
            content:
                'Subscribe to Nintendo Life on YouTube\r\nNintendo has announced it will be adding the original Pokémon Stadium to the Switch N64 service next week on 12th April.\r\nThis arena battle title was first rele… [+1668 chars]',
        },
        {
            source: {
                id: null,
                name: 'Push Square',
            },
            author: 'Khayl Adam',
            title: "The Last of Us PC Is Not 'Naughty Dog Quality', Developer Admits - Push Square",
            description: 'In the Dog House',
            url: 'https://www.pushsquare.com/news/2023/04/the-last-of-us-pc-is-not-naughty-dog-quality-developer-admits',
            urlToImage: 'https://images.pushsquare.com/45c7fbe76f09a/1280x720.jpg',
            publishedAt: '2023-04-04T01:00:00Z',
            content:
                'For once I would like a developer or publisher to come clean and give the reason why a game would release like this.\r\nApologies are good and all and the promise to fix the problems is mandatory but i… [+670 chars]',
        },
        {
            source: {
                id: null,
                name: 'Wccftech',
            },
            author: 'Hassan Mujtaba',
            title: 'NVIDIA GeForce RTX 4070 Graphics Card OpenCL Benchmark Leaks Out, 19% Slower Than 4070 Ti - Wccftech',
            description:
                "The first benchmarks of NVIDIA's GeForce RTX 4070 Non-Ti graphics card have been leaked within the Geekbench OpenCL database.",
            url: 'https://wccftech.com/nvidia-geforce-rtx-4070-graphics-card-opencl-benchmark-leak-19-percent-slower-than-4070-ti/',
            urlToImage:
                'https://cdn.wccftech.com/wp-content/uploads/2023/03/NVIDIA-GeForce-RTX-4070-RT-X-4060-Graphics-Cards-gigapixel-standard-scale-2_00x-scaled-gigapixel-standard-scale-2_00x-scaled.jpg',
            publishedAt: '2023-04-04T00:40:00Z',
            content:
                "The first benchmarks of NVIDIA's GeForce RTX 4070 Non-Ti graphics card have been leaked within the Geekbench OpenCL database.\r\nNVIDIA GeForce RTX 4070 Graphics Card OpenCL Benchmarks Show On Par With… [+5813 chars]",
        },
        {
            source: {
                id: null,
                name: 'YouTube',
            },
            author: null,
            title: "Why Ark's Next-Gen Unreal 5 Remaster Is a F*** You To Fans - IGN Daily Fix - IGN",
            description:
                "On today's Daily Fix:There's some bad and worse news coming for fans of survival game Ark. The developer, Studio Wildcard, announced that the upcoming sequel...",
            url: 'https://www.youtube.com/watch?v=vTiULQDyapA',
            urlToImage: 'https://i.ytimg.com/vi/vTiULQDyapA/maxresdefault.jpg',
            publishedAt: '2023-04-04T00:02:45Z',
            content: null,
        },
        {
            source: {
                id: 'engadget',
                name: 'Engadget',
            },
            author: 'https://www.engadget.com/about/editors/james-trew',
            title: "Rode's Wireless ME squeezes a second mic into its receiver | Engadget - Engadget",
            description: "Rode's latest wireless lav mics are a budget option that still lets you record two different speakers..",
            url: 'https://www.engadget.com/rodes-wireless-me-squeezes-a-second-mic-into-its-receiver-000009619.html',
            urlToImage:
                'https://s.yimg.com/uu/api/res/1.2/4w3zZiPL6uwaKa38yG9.2w--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/91eb6d90-cc87-11ed-b71b-4826f8e01c5d.cf.jpg',
            publishedAt: '2023-04-04T00:01:00Z',
            content:
                'When Rode released the original Wireless GO, it was an instant success. The ease of use, audio quality and reasonable price made wireless microphones much more accessible. In fact it was so successfu… [+4660 chars]',
        },
    ];

    useEffect(() => {
        const RAWG_API_KEY = process.env.REACT_APP_RAWG_GAMING_API_KEY;

        const fetchData = async () => {
            try {
                const platformResponse = await fetch(`https://rawg-video-games-database.p.rapidapi.com/platforms?key=${RAWG_API_KEY}`, {
                    headers: { 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, 'X-RapidAPI-Host': process.env.REACT_APP_RAWG_API_HOST },
                });
                const rawPlatforms = (await platformResponse.json()).results;

                const platformImgsResponse = await fetch('http://localhost:5000/api/platforms/images', { credentials: 'include' });
                const rawPlatformImgs = (await platformImgsResponse.json()).imageUrls;

                const sortedImgs = rawPlatformImgs.sort((a, b) => {
                    const n1 = parseInt(a.split('/').pop().split('-')[0]);
                    const n2 = parseInt(b.split('/').pop().split('-')[0]);
                    return n1 - n2;
                });

                const finalPlatforms = rawPlatforms.map((x, i) => {
                    x.image = sortedImgs[i];
                    return x;
                });

                setPlatforms(finalPlatforms);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    const showAllHandler = () => {
        setShowAll((s) => !s);
    };

    return (
        <section className="plaftorms-section">
            {loading
                ? <Spinner />
                : <>
                    <div className="platforms-titles">
                        <h1 className="platforms-heading-main">Gaming Platforms</h1>
                        <h1 className="platforms-heading-news">Tech News</h1>
                    </div>
                    <div className="platforms-wrapper">
                        <div className="platforms-main">
                            <div className="platforms-container">
                                {platforms.slice(0, 15).map((x) => (
                                    <PlatformTemplate key={x.id} platform={x} />
                                ))}
                                {showAll && platforms.slice(16, -1).map((x) => <PlatformTemplate key={x.id} platform={x} />)}
                            </div>
                            <button className="platforms-showAll-button" onClick={showAllHandler}>
                                {showAll ? 'Show less' : 'Show All'}
                            </button>
                        </div>
                        <div className="platforms-news">
                            <ul className="platforms-news-list">
                                {techNews.map((x) => {
                                    return (
                                        <li className="platforms-news-item">
                                            <Link to={x.url} target="_blank">
                                                {x.title}
                                            </Link>
                                            <div className="platform-news-info">
                                                <span className="platform-news-author">{x.author || '-'}</span>
                                                <span className="platform-news-date">
                                                    {new Date(x.publishedAt).toLocaleString(
                                                        ('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })
                                                    )}
                                                </span>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </>
            }

        </section>
    );
};

export default Platforms;
