import { createBrowserRouter } from "react-router-dom";
import Home from "../../layouts/Main/Home";
import Main from "../../layouts/Main/Main";
import Blogs from "../../pages/Blogs/Blogs";
import CourseItems from "../../pages/Courses/CourseItems/CourseItems";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        children: [
          {
            path: "/courses",
            element: <CourseItems></CourseItems>,
            loader: async () =>
              fetch(
                "https://lerning-platform-server-side-sayemmolla012-outlookcom.vercel.app/courses"
              ),
          },
          {
            path: "/courses/categories/:id",
            element: <CourseItems></CourseItems>,
            loader: async ({ params }) =>
              fetch(
                `https://lerning-platform-server-side-sayemmolla012-outlookcom.vercel.app/courses/categories/${params.id}`
              ),
          },
        ],
      },
    ],
  },
]);
const Route = () => {
  return <div></div>;
};

export default Route;
