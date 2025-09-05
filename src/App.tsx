import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import LanguageCoursesPage from './pages/LanguageCourses';

import './global.css';
import Testimonals from './pages/Testimonals';

const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/language-courses', element: <LanguageCoursesPage />},
  {path: '/testimonals', element: <Testimonals />},
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
