import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./Pages/Login"
import Member from "./Pages/Member"
import Kyc from "./Pages/Kyc"



const MyApp = () => {
  return (
   
    <Router>
      
      <Routes>
        <Route path='/' element ={<Login />} />
        <Route path='/member' element ={<Member />}  />
        <Route path='/Kyc' element ={<Kyc />}  />

    
      </Routes>

    
    </Router>
  )
}

export default MyApp