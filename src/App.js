
import './App.css';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home'
import Login from './components/Login'
import Aboutus from './components/Aboutus'
import Register from './components/Register'
import UserProfile from './components/UserProfile';
import Products from './components/Products';
import UserCart from './components/UserCart';
import Chart from './components/Chart.js';
import Tips from './components/FinancialTips.js';
import Stocks from './components/Stocks.js';
// import Quiz from './Quiz';
// import EducationalArticles from './EducationalArticles';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"/",
          element:<Home/>

        },
        {
          path:"/Chart",
          element:<Chart/>

        },
        {
          path:"/Stocks",
          element:<Stocks/>

        },
        {
          path:"/tips",
          element:<Tips/>

        },
        {
          path:"/Register",
          element:<Register/>

        },

        {
          path:"/Login",
          element:<Login/>

        },
        {
          path:"/Aboutus",
          element:<Aboutus/>
        },
        //route for user-profile
        {
          path:"/user-profile",
          element:<UserProfile/>,
          children:[
            {
              path:"products",
              element:<Products/>
            },
            {
              path:"cart",
              element:<UserCart/>
            }

          ]

        }
      ]
    }
  ]
  )
      
  return (
    <div className='main'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
