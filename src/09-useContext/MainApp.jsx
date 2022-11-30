import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";


export const MainApp = () => {
  return (
    <UserProvider>

    
    <Navbar/>
 
   


    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="About" element={<AboutPage/>}/>
      <Route path="Login" element={<LoginPage/>}/>
      <Route path="/*" element={<Navigate to="/About"/>}/>
    </Routes>
    </UserProvider>
  )
}
