# Gamepedia React Project

Gamepedia React Project is a web application that allows users to browse and search for video games and gaming platforms. It retrieves data from the RAWG Video Games Database API and presents it in a user-friendly way. The application also uses an Express.js API back-end server that stores information about authenticated users. The server scrapes the latest gaming and technology news using Cheerio web scraping.

The app has a forum section where users can communicate with each other through discussions about games, and they can also review games to help others find suitable games.

**Note**: You can view the web app without being signed up, but you won't have access to features like creating, editing, or deleting discussions, reviews, or comments.

## Installation

To install the application, follow these steps:

1. Clone the repository: `git clone https://github.com/Veskata98/Gamepedia-React-project.git`
2. Install the dependencies: `npm install`
3. Create a `.env` file in the root directory and add your RAWG API key as follows: `REACT_APP_RAWG_GAMING_API_KEY=<your API key>`
4. Run the application: `npm start`

## Features

The application allows users to:

- Browse, search and filter video games by platform
- View details about a specific game, including its description, videos, release date and available stores to purchase
- Access information about every gaming platform ever released
- Add games to a favorites list and review them
- Create, edit, like, dislike discussions about games
- Post comments on every discussion
- Customize your profile

## Technologies

The application was built using the following technologies:

- React
- React Router
- Vanilla CSS

## License

This project is licensed under the MIT License.
