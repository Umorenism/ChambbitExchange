// main.tsx
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import FeedPage from "./component/pages/FeedPage.tsx";
import ConnectPage from "./component/pages/ConnectPage.tsx";
import CreatePage from "./component/pages/CreatePage.tsx";
import Navbar from "./component/Header/Navbar.tsx";
import { Footer } from "./component/footer/Footer.tsx";
import ChatPage from "./component/pages/ChatPage.tsx";
import Login from "./auth/Login.tsx";

import ProfileCard from "./component/pages/ProfilePage.tsx";

// Pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Navbar />
            <FeedPage />
            <Footer />
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <Login />
          </>
        ),
      },
      {
        path: "/connect",
        element: (
          <>
            <Navbar />
            <ConnectPage />
            <Footer />
          </>
        ),
      },
      {
        path: "/create",
        element: (
          <>
            <Navbar />
            <CreatePage />
            <Footer />
          </>
        ),
      },
      {
        path: "/chat",
        element: (
          <>
            <ChatPage />
          </>
        ),
      },
      {
        path: "/profile",
        element: (
          <>
            <Navbar />
            <ProfileCard />
            <Footer />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
