import './App.css';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from "./components/Layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import CountryDetails from "./components/Layout/CountryDetails"
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id", // DYNAMIC ROOT
        element: <CountryDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },],
  },
]);

function App() {

  return (
    <div>
      {/* <p> Hamza_Pats </p> */}
      <RouterProvider router={router}/>
    </div>
    
  )
}

export default App;
