import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Router,
} from "react-router-dom";
import Header from "../features/Header/Header.js";
import Reddit from "../features/Reddit/Reddit.js";
import Post from "../features/Post/Post";
import Subreddits from "../features/Subreddits/Subreddits";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Reddit />,
          children: [
            {
              path: "/",
              element: <Subreddits />,
            },
          ],
        },
        {
          path: "post/:postid",
          element: <Post />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
  // return (
  //   <div className="app">
  //     <Header />
  //     <Reddit />
  //     <Subreddits />
  //   </div>
  // );
}

export default App;
