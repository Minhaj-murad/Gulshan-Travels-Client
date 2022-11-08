
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Booking from './Components/Booking/Booking';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import Signup from './Components/Signup/Signup';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('data.json')
        },
        {
          path:'/home',
          element:<Home></Home>,
          
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/bookings',
          element:<Booking></Booking>,
        },
        {
          path:'/signup',
          element:<Signup></Signup>,
        },
      ]
    }
  ])
  return (
    <div className=' background' >

    <div className='outlet'>
    <RouterProvider router={router}> </RouterProvider>
    </div>
    
   
  </div>
);
}

export default App;
