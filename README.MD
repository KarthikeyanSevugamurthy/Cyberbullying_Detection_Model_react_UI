
# Cyberbullying Detection Model with Frontend

This project is a frontend-only React application for detecting cyberbullying in tweets. The application allows users to input tweets, submit them, and display the tweets on the screen. Users can also edit or delete their submitted tweets. The project demonstrates the basics of state management, form handling, and component lifecycle methods in React.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [Lifecycle Methods](#lifecycle-methods)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This is a simple React application with no backend that allows users to interact with a cyberbullying detection model interface. The focus of this project is to provide a clean, intuitive frontend where users can:
- Enter tweets
- Submit tweets
- View submitted tweets
- Edit or delete their tweets

## Features

- **Tweet Submission:** Users can enter and submit tweets.
- **View Tweets:** Submitted tweets are displayed in a list.
- **Edit Tweets:** Users can edit their tweets after submission.
- **Delete Tweets:** Users can delete their tweets from the list.
- **Local Storage:** Tweets are saved in local storage so that they persist across sessions.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/cyberbullying-tweet-detection.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd cyberbullying-tweet-detection
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

The application should now be running at `http://localhost:3000`.

## Usage

1. Open your browser and go to `http://localhost:3000/submit-tweet`.
2. Enter a tweet in the input field and click "Submit."
3. The tweet will be added to the list of submitted tweets.
4. Use the "Edit" button to modify a tweet or the "Delete" button to remove it.

## Folder Structure

Here's an overview of the project structure:

```
src/
├── components/
│   ├── Navbar.js           // Navigation bar component
│   ├── Home.js             // Home page component
│   ├── Models.js           // Models page component
│   ├── Dataset.js          // Dataset page component
│   ├── TweetForm.js        // Form for entering and submitting tweets
│   ├── TweetDisplay.js     // Displays the list of submitted tweets
│   ├── TweetContainer.js   // Manages the state and lifecycle of tweets
├── App.js                  // Main application component
├── index.js                // Entry point for the React application
```

## Components

- **Navbar:** Provides navigation links to different pages of the application.
- **Home:** A simple homepage for the application.
- **Models:** Placeholder for the models page.
- **Dataset:** Placeholder for the dataset page.
- **TweetForm:** Handles the input and submission of tweets.
- **TweetDisplay:** Renders the list of submitted tweets with options to edit or delete.
- **TweetContainer:** Manages the state of tweets and handles CRUD operations (Create, Read, Update, Delete).

## Lifecycle Methods

The `TweetContainer` component demonstrates the use of React's lifecycle methods:

- **Component Mounting (`useEffect`):** Loads tweets from local storage when the component mounts.
- **Component Updating (`useEffect`):** Saves tweets to local storage whenever the tweets array is updated.
- **Component Unmounting (`useEffect` with cleanup):** Logs a message to the console when the component is about to unmount.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Happy coding and have a blast! 🎉
