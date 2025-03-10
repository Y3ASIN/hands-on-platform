import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";

import Home from "./pages/Home.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Login from "./pages/Login.jsx";
import Registration from "./pages/Registration.jsx";
import Profile from "./pages/Profile.jsx";
import Layout from "./pages/Layout.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <PublicRoute>
        <NotFoundPage />
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/events",
        element: <EventsPage />,
      },
      {
        path: "", // Default route when just /dashboard is accessed
        element: <Navigate to="/dashboard/profile" replace />,
      },
    ],
  },
]);

const queryCLient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryCLient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </QueryClientProvider>,
);
