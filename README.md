# Location-Based Application

## Overview
This application is a location-based web app built with ReactJS. It allows users to authenticate, view an interactive map with predefined markers, and access details about specific locations. Additionally, users can explore a list of movies fetched from an external API.

## Features
- **Login Functionality**: Users can log in using their credentials, with form validation for input fields. Authentication is managed using local storage, and authenticated users are redirected to the map screen.
- **Map Screen**: Integrates Mapbox GL to display an interactive map with predefined markers. Clicking on a marker displays details about the corresponding location.
- **Details Screen**: Provides information about a location when a user clicks on a marker on the map. Information such as coordinates and description is passed from the map screen.
- **Movies Screen (Bonus)**: Makes an API call to https://dummyapi.online/api/movies to fetch a list of movies, which are displayed in the application interface.

## Optional Bonus Features
- **Form Validation**: Implemented client-side form validation to handle incorrect or empty inputs.
- **Enhanced Map Screen**: Added additional features such as zoom controls, map styles, and search functionality to enhance the map viewing experience.
- **Marker Editing**: Allowed users to edit or delete markers on the map, providing greater control over the displayed locations.
- **Logout Functionality**: Implemented logout functionality to allow users to securely log out and clear local storage.

## Installation
1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

## Technologies Used
- ReactJS
- Mapbox GL
- React Router
- Axios (for API requests)
- CSS (for styling)

## Credits
- Map data provided by Mapbox (https://www.mapbox.com/)
- Movie data provided by DummyAPI (https://dummyapi.online/)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
