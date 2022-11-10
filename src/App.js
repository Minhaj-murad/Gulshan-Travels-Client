import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddHotels from './Components/AddHotels/AddHotels';
import Allservices from './Components/Home/Allservices/Allservices';
import Home from './Components/Home/Home';
import HotelDetails from './Components/Home/Hotels/HotelDetails/HotelDetails';
import Places from './Components/Home/Hotels/Places/Places';
import Myreviews from './Components/Home/MyReviews/Myreviews';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import MyBlog from './Components/MyBlog/MyBlog';
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
           path:'/blog',
           element:<MyBlog></MyBlog>
        },
        {
              path:'/allhotels',
              element:<Allservices></Allservices>,
              loader:()=>fetch('http://localhost:5000/hotels')
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
         path:'/addhotels/:id',
         element:<PrivateRoute><AddHotels></AddHotels></PrivateRoute>,
         loader: ({params})=> fetch(`http://localhost:5000/hotels/${params.id}`)
        },
        { 
          path:'/myreviews',
          element:<PrivateRoute><Myreviews></Myreviews></PrivateRoute>,
          loader: ()=> fetch('http://localhost:5000/hotels')
          
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
