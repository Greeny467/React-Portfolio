import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/CSS/reset.css';
import './assets/CSS/portfolio.css';

import AboutMe from './pages/aboutMe.jsx';
import ContactMe from './pages/contactMe.jsx';
import Portfolio from './pages/portfolio.jsx';
import ProjectPage from './pages/projectPage.jsx';
import Resume from './pages/resume.jsx';
import ErrorPage from './pages/errorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'contact',
        element: <ContactMe />
      },
      {
        path: 'projects/:id',
        element: <ProjectPage />
      },
      {
        path: 'resume',
        element: <Resume />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
