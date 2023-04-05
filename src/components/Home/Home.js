import './home.css';

// import { useContext } from 'react';

// import { NewsContext } from '../../contexts/NewsContext';
import { News } from './News/News';

export const Home = () => {
    // const { news, mainArticle } = useContext(NewsContext);

    const TECH_NEWS_API_KEY = process.env.REACT_APP_TECH_NEWS;

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

    // const techNews = fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${TECH_NEWS_API_KEY}`)
    //     .then((res) => res.json())
    //     .then((result) => console.log(result));

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
        {
            source: {
                id: null,
                name: 'Hollywood Reporter',
            },
            author: 'J. Clara Chan',
            title: 'Spotify Shutters Live Audio App - Hollywood Reporter',
            description:
                'The tech giant, which created its live audio offering after acquiring Betty Labs, canceled some of its live audio shows last year.',
            url: 'https://www.hollywoodreporter.com/business/business-news/spotify-live-shutters-1235366519/',
            urlToImage:
                'https://www.hollywoodreporter.com/wp-content/uploads/2023/04/Spotify-Logo-Mobile-Phone-GettyImages-1234971748-H-2023.jpg?w=1024',
            publishedAt: '2023-04-03T23:21:11Z',
            content:
                'Spotify is shutting down its standalone live audio app, Spotify Live, at the end of this month as the audio giant turns away from live programming, a company spokesperson told The Hollywood Reporter … [+2098 chars]',
        },
        {
            source: {
                id: null,
                name: 'New York Post',
            },
            author: 'Steve Cuozzo',
            title: 'Gigantic Mermaid Inn to reopen near former Upper West Side location - New York Post ',
            description:
                'Danny Abrams, who owns the popular seafood-driven Mermaid mini-empire with Cindy Smith, said it will have an impressive 6,500 square feet.',
            url: 'https://nypost.com/2023/04/03/mermaid-inn-to-reopen-on-upper-west-side-this-year/',
            urlToImage: 'https://nypost.com/wp-content/uploads/sites/2/2023/04/NYPICHPDPICT000009182648.jpg?quality=75&strip=all&w=1024',
            publishedAt: '2023-04-03T23:13:00Z',
            content:
                'They’re breaking out the Chardonnay and cocktail sauce on the Upper West Side.\r\nThe Mermaid Inn, which made a splash on Amsterdam Avenue for 15 years before it closed last year, is taking the plunge … [+1524 chars]',
        },
        {
            source: {
                id: null,
                name: 'ComicBook.com',
            },
            author: 'ComicBook.com',
            title: 'Super Mario Movie Cast Plays Mario Kart 8 Deluxe in New Video - ComicBook.com',
            description: null,
            url: 'https://comicbook.com/gaming/news/super-mario-movie-cast-mario-kart-8-video/',
            urlToImage: null,
            publishedAt: '2023-04-03T23:07:00Z',
            content: null,
        },
        {
            source: {
                id: null,
                name: 'The Nerd Stash',
            },
            author: 'Omer Dursun',
            title: 'Hogwarts Legacy DLC: Release Date, New Items, Locations - The Nerd Stash',
            description: 'Hogwarts Legacy has been a hit, and players are interested in any DLC down the road. Here are the details about DLC.',
            url: 'https://thenerdstash.com/hogwarts-legacy-dlc-release-date-new-items-locations/',
            urlToImage: 'https://thenerdstash.com/wp-content/uploads/2023/03/hogwarts-legacy-is-now-the-fastest-selling-1-1.jpg',
            publishedAt: '2023-04-03T22:35:06Z',
            content:
                'Hogwarts Legacy has been highly played by the Harry Potter franchise fans, who are eager to immerse themselves in the magical world of Hogwarts School of Witchcraft and Wizardry. Moreover, players ar… [+1641 chars]',
        },
        {
            source: {
                id: null,
                name: 'Dexerto',
            },
            author: 'Zackerie Fairfax',
            title: 'Pokemon Go outrage over Remote Raids devolves into death threats and hate speech - Dexerto',
            description:
                'Some disgruntled Pokemon Go players have resorted to hate speech and death threats following the announcement of a Remote Raid nerf.',
            url: 'https://www.dexerto.com/pokemon/pokemon-go-outrage-over-remote-raids-devolves-into-death-threats-and-hate-speech-2103682/',
            urlToImage: 'https://editors.dexerto.com/wp-content/uploads/2023/04/03/pokemon-oak-gary.jpg',
            publishedAt: '2023-04-03T22:17:17Z',
            content:
                'While a large number of players plan to boycott Pokemon Go or have signed petitions in support of reverting Remote Raid pass changes, others have devolved to using transphobic hate speech and sending… [+2680 chars]',
        },
        {
            source: {
                id: null,
                name: 'GameSpot',
            },
            author: 'Steven Petite',
            title: 'EA Sports PGA Tour Preorders - Discounts Available, Early Access Starting Now, And More - GameSpot',
            description: 'EA Sports PGA Tour is available for Xbox Series X|S, PS5, and PC.',
            url: 'https://www.gamespot.com/gallery/ea-sports-pga-tour-preorders-discounts-available-early-access-starting-now-and-more/2900-4612/',
            urlToImage: 'https://www.gamespot.com/a/uploads/screen_kubrick/1595/15950357/4090640-easports.jpeg',
            publishedAt: '2023-04-03T22:03:24Z',
            content:
                'The products discussed here were independently chosen by our editors.\r\n GameSpot may get a share of the revenue if you buy anything featured on our site.',
        },
        {
            source: {
                id: null,
                name: 'Gizchina.com',
            },
            author: 'Marco Lancaster',
            title: 'PS5 Slim / PS5 Pro could arrive in June during PlayStation Showcase - Gizchina.com',
            description:
                'There is a new PlayStation Showcase rumored for June! As per the rumors, it may serve as a stage for the PS5 Slim and PS5 Pro launch.',
            url: 'https://www.gizchina.com/2023/04/03/ps5-slim-launch-rumors-playstation-showcase-june/',
            urlToImage: 'https://www.gizchina.com/wp-content/uploads/images/2023/04/imagem_2023-04-03_190139832.png',
            publishedAt: '2023-04-03T22:02:21Z',
            content:
                'Rumors keep popping out regarding the launch of new PS5 models. As per these rumors, Sony is gearing up to introduce the PS5 Slim and PS5 Pro very soon. Apparently, the Slim variant could come a litt… [+3742 chars]',
        },
        {
            source: {
                id: 'ars-technica',
                name: 'Ars Technica',
            },
            author: 'John Timmer',
            title: 'Proton’s mass radius is apparently shorter than its charge radius - Ars Technica',
            description: "The quarks that give it charge aren't hanging out with the gluons that provide mass.",
            url: 'https://arstechnica.com/science/2023/04/protons-mass-radius-is-apparently-shorter-than-its-charge-radius/',
            urlToImage: 'https://cdn.arstechnica.net/wp-content/uploads/2023/04/Jefferson-Lab-Aerial-Photo-760x380.jpg',
            publishedAt: '2023-04-03T20:30:42Z',
            content:
                'Enlarge/ The Jefferson Lab particle accelerator, where the work took place. Electrons in the oval at top center are sent to different underground target rooms (circles at lower right).\r\n30 with \r\nIf … [+4122 chars]',
        },
        {
            source: {
                id: null,
                name: 'CNET',
            },
            author: 'Zachary McAuliffe',
            title: 'New Privacy-Focused Browser Aims to Fight Data Tracking - CNET',
            description: 'The browser is free and available for Windows, MacOS and Linux.',
            url: 'https://www.cnet.com/tech/services-and-software/new-privacy-focused-browser-aims-to-fight-data-tracking/',
            urlToImage:
                'https://www.cnet.com/a/img/resize/b85361319d79268a92d4019349f121b66461016e/hub/2021/02/12/2f1eeabe-731f-475c-a0f7-eb0922e0571b/locks-privacy-security-hack-hackers-2638.jpg?auto=webp&fit=crop&height=630&width=1200',
            publishedAt: '2023-04-03T20:18:49Z',
            content:
                'On Monday, the Tor Project and Mullvad VPN, two organizations focused on user privacy, released a new privacy-focused web browser called Mullvad Browser. The browser is free to download and works on … [+1581 chars]',
        },
        {
            source: {
                id: 'ars-technica',
                name: 'Ars Technica',
            },
            author: 'Ron Amadeo',
            title: 'Google brings “Nearby Share” to Windows, making it easy to transfer files - Ars Technica',
            description: 'Google dives into the competitive world of Windows + Android file sharing.',
            url: 'https://arstechnica.com/gadgets/2023/04/google-brings-nearby-share-to-windows-making-it-easy-to-transfer-files/',
            urlToImage: 'https://cdn.arstechnica.net/wp-content/uploads/2023/04/8-760x380.jpg',
            publishedAt: '2023-04-03T19:42:44Z',
            content:
                'Enlarge/ Google\'s Nearby Share can quickly send a photo to your computer. \r\n18 with \r\nGoogle is bringing Android\'s "Nearby Share" feature to the desktop with a new Windows app. Google says the new pr… [+3982 chars]',
        },
    ];

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
                    <h2 className="home-subheading discussions">Latest threads</h2>
                    <ul className="last-discussion-list">
                        <li className="last-discussion-item">
                            <a href="/forum/discussions/{{_id}}">
                                <p className="last-discussion-title">title</p>
                                <p className="last-discussion-date">date</p>
                            </a>
                        </li>
                        <li className="last-discussion-item">
                            <a href="/forum/discussions/{{_id}}">
                                <p className="last-discussion-title">title</p>
                                <p className="last-discussion-date">date</p>
                            </a>
                        </li>
                        <li className="last-discussion-item">
                            <a href="/forum/discussions/{{_id}}">
                                <p className="last-discussion-title">title</p>
                                <p className="last-discussion-date">date</p>
                            </a>
                        </li>
                        <li className="last-discussion-item">
                            <a href="/forum/discussions/{{_id}}">
                                <p className="last-discussion-title">title</p>
                                <p className="last-discussion-date">date</p>
                            </a>
                        </li>
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
