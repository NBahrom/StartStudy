// import { createBrowserRouter, RouterProvider , Outlet} from 'react-router-dom';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';

import HomePage from './pages/Home';
import LanguageCoursesPage from './pages/LanguageCourses';

import './global.css';
import Testimonals from './pages/Testimonals';
import ScrollToTop from './util/scrollToTop';

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createHashRouter([
  {
    element: <Layout />,   
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/language-courses", element: <LanguageCoursesPage /> },
      { path: "/testimonals", element: <Testimonals /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
