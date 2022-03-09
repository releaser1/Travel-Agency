import React, {useState, useEffect} from 'react';
import LoginModel from '../AutentificationPage/LoginModel'
import '../AutentificationPage/autentification.css'








function AutentificationPage() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  



  
    
      const [user, setUser] = useState({ name: "", email: ""});
      const [error, setError] = useState("");
    
    
      const Login = details => {
        console.log(details)
    
        if(details.email == adminUser.email && details.password == adminUser.password) {
          console.log('logged in');
          setUser({
            name: details.name,
            email: details.email
          });
        } else {
          setError("Details do not match")
          console.log("Details do not match");
        } 
    
      }
    

      

    
      const Logout = () => {
        setUser({
          name: "",
          email: ""
        });
         console.log("LogOut")
      }
    return (
        <div className='autentification-main'>
            <div className='autentification-child'>
            {(user.email != "") ? (
                <div>
                    <h1>Welcome</h1>
                    <button onClick={Logout}>LogOut</button>   
                </div>
                     ) : ( <LoginModel Login={Login} error={error} /> )   
            } 
            </div>


        </div>
    );
}

export default AutentificationPage;