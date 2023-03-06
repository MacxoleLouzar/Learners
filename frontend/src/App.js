import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';


import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Learners from './Pages/Learners';
import Portfolio from './Pages/Portfolio';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/Learners",
        element: <Learners />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
    ],
  },

]);

function App() {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  return (
    <div className="app">     
    </div>
  );
}
export default App;
