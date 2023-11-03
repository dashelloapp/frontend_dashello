import React,{useContext} from 'react'
//import * as ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
/* eslint-disable react/prop-types */


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home"
import Header from "./Components/Header"
import Goals from "./Components/Goals"
import Tasks from "./Components/Tasks"
import Integrations from "./Components/Integrations"
import Team from "./Components/Team"
import Settings from "./Components/Settings"
import SignInUp from './Components/SignUpFlow/SignInUp';
import { UserProvider } from './Contexts/UserProvider';
import UserContext from './Contexts/UserContext';



function App() {
  //let { isSignedIn } = useContext(UserContext);

  return (
    <React.StrictMode>
     <UserProvider>
     <BrowserRouter>
        <Routes>
          {false ? <Route exact path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="dashboard/goals" element={<Goals/>}/>
              <Route path="dashboard/tasks" element={<Tasks/>}/>
              <Route path="dashboard/integrations" element={<Integrations/>}/>
              <Route path="dashboard/team" element={<Team/>}/>
              <Route path="dashboard/settings" element={<Settings/>}/>
            </Route>
            :
            <Route exact path="/">
                <Route index element={<SignInUp />} />
            </Route>
          }
        </Routes>
      </BrowserRouter>
     </UserProvider>
    </React.StrictMode>
  )
}

export default App
