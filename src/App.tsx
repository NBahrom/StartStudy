// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./store/languageSlice";
import { AppDispatch } from "./store/store";

import HomePage from "./pages/Home";
import LanguageCoursesPage from "./pages/LanguageCourses";

import "./global.css";
import Testimonals from "./pages/Testimonals";
import ScrollToTop from "./util/scrollToTop";
import BlogArchive from "./pages/BlogArchive";
import BlogPost from './pages/BlogPost';
import AboutUs from './pages/About-us';
// import BlogPost from './pages/BlogPost'

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
      { path: "/about-us", element: <AboutUs /> },
      { path: "/blog", element: <BlogArchive /> },
      { path: "/blog/:slug", element: <BlogPost /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories()); // load categories once
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
