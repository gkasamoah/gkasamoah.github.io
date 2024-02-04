import { useState } from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Studentpage from './pages/Studentpage'
import Institutionpage from './pages/Institutionpage'
import Institutionform from './components/Institutionform'
import Registerstudent from './components/Registerstudent'
import Transcript from './components/Transcript'
import Studentform from './components/Studentform'
import SignupIndex from './pages/SignupIndex'
import StudentSignup from './components/StudentSignup'
import InstitutionSignup from './components/InstitutionSignup'
import Sponsor from './components/Sponsor'
import LandingPage from './components/LandingPage'
import Index from './pages'
import AdminDashboard from './pages/AdminDashboard'
import StartApplication from './components/StartApplication'
import StudentDashboardDashboard from './components/Studentdashboard'

function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<Homepage />
  },{
    path:'/Index',
    element:<Index />
  },
  {
    path:'/Index/Studentpage',
    element: <Studentpage />
  },{
    
      path:'/Index/Institutionpage',
      element: <Institutionpage />
    
  },
  {
    path:'/Institutionform',
    element: <Institutionform/>
  },{
    path: "/Studentregister",
    element: <Registerstudent/>
  },
  {
    path:"/Transcript",
    element: <Transcript/>
  },
  {
    path:"/Studentform",
    element:<Studentform />
  },
  {
    path:"/SignupIndex",
    element:<SignupIndex/>
  },
  {path:"/Sponsor",
  element: <Sponsor/>
},
{path:"/InstitutionSignup",
element:<InstitutionSignup/>
},
{path:"/LandingPage",
element:<LandingPage />
},
{path:"/admindashboard",
element:<AdminDashboard />
},
{path:"" ,
element:<StartApplication />
},
{path:"/StudentDashboard",
element:<StudentDashboardDashboard />
}



  

])
  

  return (
    <div className=' bg-white'>  
    <RouterProvider router={router} />
     

     
     </div>
  )
}

export default App
