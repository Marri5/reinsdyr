# Reindeer Registration App

## Overview
The Reindeer Registration App is a web application designed to facilitate the registration and management of reindeer and their owners. The application allows users to register, log in, and manage their reindeer, while providing a search functionality to find registered reindeer based on various criteria.

## Features
- User registration and login
- Reindeer registration for authorized users
- Search functionality for finding reindeer
- FAQ section with common questions and answers
- Interactive map displaying different reindeer grazing areas

## Technology Stack
- **Frontend**: HTML, CSS, JavaScript, EJS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Basic CSS for layout and design

## Project Structure
```
reindeer-registration-app
├── public
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── scripts.js
├── src
│   ├── controllers
│   │   ├── authController.js
│   │   ├── reindeerController.js
│   │   └── userController.js
│   ├── models
│   │   ├── Reindeer.js
│   │   ├── User.js
│   │   └── Flock.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── reindeerRoutes.js
│   │   └── userRoutes.js
│   ├── utils
│   │   ├── authMiddleware.js
│   │   └── jwtUtils.js
│   ├── views
│   │   ├── partials
│   │   │   ├── header.ejs
│   │   │   └── footer.ejs
│   │   ├── auth
│   │   │   ├── login.ejs
│   │   │   └── register.ejs
│   │   ├── reindeer
│   │   │   ├── addReindeer.ejs
│   │   │   └── searchReindeer.ejs
│   │   ├── faq.ejs
│   │   ├── index.ejs
│   │   └── map.ejs
├── .env
├── app.js
├── package.json
└── tsconfig.json
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd reindeer-registration-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://10.12.3.222/reindeerDB
   JWT_SECRET=your_jwt_secret
   ```

4. Start the application:
   ```
   npm start
   ```

5. Access the application in your web browser at `http://localhost:3000`.

## Future Improvements
- Implement advanced search filters for reindeer.
- Enhance user interface with better styling and responsiveness.
- Add user roles and permissions for more granular access control.
- Integrate additional features such as notifications for users.

## License
This project is licensed under the MIT License.