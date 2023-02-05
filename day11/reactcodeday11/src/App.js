import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import "../App.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/ShimmerUi";
import UserContext from "./utils/UserContext";

// Lazy Loading Components
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

const Foodkingdom = () => {
  const [user, setUser] = useState({
    name: "Ankan",
    email: "Ankan@gmail.com",
  });
  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Foodkingdom />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>On Demand/lazy/Dynamic Loading About</h1>}>
            {" "}
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
