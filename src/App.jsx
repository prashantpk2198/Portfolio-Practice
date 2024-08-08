import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoot from "./pages/MainRoot";
import HomePage from "./pages/Home";
import WorksPage from "./pages/Works";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import RecentPostsPage from "./pages/RecentPostsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "Works",
        element: <WorksPage />,
      },
      {
        path: "Blog",
        element: <BlogPage />,
      },
      {
        path: "Contact",
        element: <ContactPage />,
      },
      {
        path: "Recent-Posts",
        element: <RecentPostsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
