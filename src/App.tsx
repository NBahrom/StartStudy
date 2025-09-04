import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import LanguageCoursesPage from './pages/LanguageCourses';

import './global.css';

const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/language-courses', element: <LanguageCoursesPage />},
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
