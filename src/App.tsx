// import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar_demo'
import Header from './components/Header';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';



// Page Imports 
import HomeTab from './Home';
import Tour_packages from './Tour_packages';
import Blog from './Blog';
import Enquire_Now from './Enquire_now';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Header/><HomeTab/></>
    },
    {
      path:"/Tour_packages",
      element: <><Header/><Tour_packages/></>
    },
    {
      path:"/Blog",
      element:<><Header/><Blog/></>
    },
    {
      path:"/Enquire_Now",
      element: <><Header/><Enquire_Now/></>
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
      {/* <Navbar/> */}
    </>
  )
}


export default App;
