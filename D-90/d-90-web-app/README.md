# D-90 Web Application

## Overview
The D-90 Web Application is designed for the university batch D-90, providing a modern and interactive platform for students to access essential information and services. This application features a responsive design and a user-friendly interface.

## Features

### Core Features
- **Home Page**: A welcoming landing page with the D-90 logo, welcome text, and quick links to key sections.
- **Profile Page**: Displays member profile information including photo, name, contact details, bio, department, and graduation year.
- **Dashboard**: An admin dashboard for managing events, notices, and other administrative tasks.
- **Batch List**: A component that displays a list of batches with relevant information and links.

### Additional Features
- **Responsive Design**: Built with Tailwind CSS for a modern and responsive user experience.
- **API Integration**: Utility functions for making API calls to the backend, handling authentication, and managing data retrieval and submission.

## Project Structure
```
d-90-web-app
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   │   └── BatchList.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Profile.tsx
│   │   └── Dashboard.tsx
│   ├── styles
│   │   └── main.css
│   ├── utils
│   │   └── api.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd d-90-web-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Deployment
To deploy the application, build the project using:
```
npm run build
```
Then, serve the contents of the `build` directory using a static file server.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.