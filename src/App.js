
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Booking from './Components/Booking/Booking';
import Home from './Components/Home/Home';
import HotelDetails from './Components/Home/Hotels/HotelDetails/HotelDetails';
import Places from './Components/Home/Hotels/Places/Places';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
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
          loader:()=>fetch('http://localhost:5000/hotels')
        },
        {
          path:'/home',
          element:<Home></Home>,
          
        },
        {
          path:'/',
          element:<Places></Places>,
         
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/bookings',
          element:<PrivateRoute><Booking></Booking></PrivateRoute>,
        },
        {
           path:'/hotels/:id',
           element:<HotelDetails> </HotelDetails>,
           loader: ({params})=> fetch(`http://localhost:5000/hotels/${params.id}`)
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
