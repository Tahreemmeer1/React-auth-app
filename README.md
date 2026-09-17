# React Auth App

A multi-page React application built with React Router and Context API. This project demonstrates client-side routing, nested routes, route parameters, protected routes, authentication state, and global theme management.

## Features

- React Router for SPA navigation
- Multiple pages: Home, Login, Dashboard, Profile, Settings
- Nested routing with Dashboard Details
- Dynamic route parameters for user profiles
- Protected routes for authenticated users
- Authentication using Context API
- Login and Logout functionality
- Global Dark Mode / Light Mode using Context API
- Custom `useAuth` and `useTheme` hooks
- 404 Not Found page
- Responsive layout
- Production-ready Vite build

## Technologies Used

- React
- React Router DOM
- Context API
- JavaScript
- HTML
- CSS
- Vite

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
│
├── contexts/
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── DashboardDetails.jsx
│   ├── Profile.jsx
│   ├── Settings.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
└── index.css